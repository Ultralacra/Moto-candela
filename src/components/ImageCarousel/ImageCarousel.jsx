import React, { useState, useEffect } from "react";
import './ImageCarousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { red } from "../../styles/colors.module.scss";

export default ({ images }) => {

    const [imagesList, setImagesList] = useState(images)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        setImagesList(images);
    }, [images])
    
    const swiperSettings = {
        style: {
            "--swiper-navigation-color": red,
            "--swiper-pagination-color": red
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        loop: true,
        spaceBetween: 10,
        navigation: true,
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [FreeMode, Navigation, Thumbs, Autoplay]
    }

    const swiperThumbnailsSettings = {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        onSwiper: (swiper) => {
            setThumbsSwiper(swiper);
        },
        breakpoints: {
            280: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            520: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 40
            },
            1440: {
                slidesPerView: 12,
                spaceBetween: 50
            }
        },
        modules: [FreeMode, Navigation, Thumbs]
    }

    return imagesList && (
        <>
            <Swiper {...swiperSettings}
                className="image-carousel">
                {imagesList.map((image) => {
                    return (
                        <SwiperSlide key={`swiper-slide-${image}`}>
                            <div className="image-carousel__item" style={{
                                backgroundImage: `url(${image})`
                            }}></div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper {...swiperThumbnailsSettings}
                className="image-carousel--thumbnail">
                {imagesList.map((image) => {
                    return (
                        <SwiperSlide key={`swiper-thumbnail-slide-${image}`}>
                            <div className="image-carousel--thumbnail__item" style={{
                                backgroundImage: `url(${image})`
                            }}></div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}