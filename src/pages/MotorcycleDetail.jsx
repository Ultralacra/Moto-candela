import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import DetailCharacteristics from '../components/DetailCharacteristics/DetailCharacteristics';
import BannerImage from "../assets/banners/banner.png";
import { getMotorcycleById } from '../services/motorcycles';

export default () => {
    const { id } = useParams();

    const [motorcycle, setMotorcycle] = useState([]);

    const fetchMotorcycle = async () => {
        const motorcycleData = await getMotorcycleById(id);
        setMotorcycle(motorcycleData);
    }

    useEffect(() => {
        fetchMotorcycle();
    }, [])

    return (
        <>
            <Banner image={BannerImage}
                title={motorcycle.name}
                subtitle={motorcycle.category}
                compact={true}
            />
            <ImageCarousel images={ motorcycle.images } />
            <DetailCharacteristics characteristics={ motorcycle.characteristics }/>
        </>
    );
}