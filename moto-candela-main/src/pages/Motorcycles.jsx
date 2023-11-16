import BannerImage from "../assets/banners/banner.png";
import Banner from "../components/Banner/Banner";
import { ProductList } from "../components/ProductList/ProductList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMotorcycles, getMotorcyclesCategories } from "../services/motorcycles";


export default () => {

    const navigate = useNavigate();


    const [motorcycles, setMotorcycles] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const categoriesData = await getMotorcyclesCategories();
        setCategories(categoriesData);
    }

    const fetchMotorcycles = async () => {
        const motorcyclesData = await getMotorcycles();
        setMotorcycles(motorcyclesData);
    }
    useEffect(() => {
        fetchMotorcycles();
    }, [])

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <>
            <Banner
                image={BannerImage}
                title="CONOCE NUESTRAS MOTOS"
                compact={true}
            />
            <ProductList categories={categories} products={motorcycles} handleNavigation={(id) => navigate(`${id}`)} />
        </>
    );
}