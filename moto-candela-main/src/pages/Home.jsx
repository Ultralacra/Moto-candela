import { useState, useEffect } from 'react';

import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { getMotorcycles } from "../services/motorcycles";

export default () => {

    const [motorcycles, setMotorcycles] = useState([]);

    const fetchMotorcycles = async () => {
        const motorcyclesData = await getMotorcycles();
        setMotorcycles(motorcyclesData);
    }

    useEffect(() => {
        fetchMotorcycles();
    }, [])

    return (
        <>
            <Banner
                image={BannerImage}
                title="MOTO CANDELA"
                subtitle="Guarenas"
            />
            <ProductCarousel motorcycles={motorcycles} />
            <ServiceSection />
            <ContactSection />
        </>
    );
}