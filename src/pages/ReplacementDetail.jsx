import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import DetailCharacteristics from '../components/DetailCharacteristics/DetailCharacteristics';
import BannerImage from "../assets/banners/banner.png";
import { getReplacementById } from '../services/replacements';

export default () => {
    const { id } = useParams();

    const [replacement, setReplacement] = useState([]);

    const fetchReplacement = async () => {
        const replacementData = await getReplacementById(id);
        setReplacement(replacementData);
    }

    useEffect(() => {
        fetchReplacement();
    }, [])

    return (
        <>
            <Banner image={BannerImage}
                title={replacement.name}
                subtitle={replacement.code}
                compact={true}
            />
            <ImageCarousel images={ replacement.images } />
            <DetailCharacteristics characteristics={ replacement.characteristics }/>
        </>
    );
}