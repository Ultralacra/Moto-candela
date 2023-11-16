import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import ProductCarouselCard from "./ProductCarouselCard";
import "./ProductCarousel.scss";

import { red } from '../../styles/colors.module.scss';

export default ({ motorcycles }) => {

    const [motorcycleList, setMotorcycleList] = useState(motorcycles)

    useEffect(() => {
        setMotorcycleList(motorcycles);
    }, [motorcycles])

    const swiperSettings = {
        style: {
            '--swiper-pagination-color': red
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        rewind: true,
        pagination: {
            clickable: true
        },
        modules: [Autoplay, Pagination],
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 50
            }
        }
    }

    return (
        <>
            <h1 className="product-carousel__title">MOTOS</h1>
            <Swiper {...swiperSettings} className="product-carousel">
                {motorcycleList.map(motorcycle => {
                    return (
                        <SwiperSlide key={`swiper-slide-${motorcycle.id}`}>
                            <ProductCarouselCard 
                                itemId={motorcycle.id}
                                image={motorcycle.images[0]}
                                title={motorcycle.name}
                                category={motorcycle.category}
                                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus illum adipisci officia rerum explicabo porro commodi similique nobis asperiores quo, harum quas quae hic tempora ab aspernatur earum sapiente?"}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}