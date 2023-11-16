import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import DetailCharacteristics from '../components/DetailCharacteristics/DetailCharacteristics';
import BannerImage from "../assets/banners/banner.png";
import { getMotorcycleById } from '../services/motorcycles';
import CartContext from '../providers/CartContext';
import { Button } from '../components/Button/Button';

const MotorcycleDetail = () => {
    const { id } = useParams();

    const [motorcycle, setMotorcycle] = useState([]);
    const { tasaDeCambio, cart, addToCart } = useContext(CartContext);
    const inCart = cart.find(item => item.id === motorcycle.id);
    
    const price = motorcycle.price ? parseFloat(motorcycle.price.$numberDecimal).toFixed(2) : null;
    const dolares = price ? price : "N/A";
    const bs = price ? (price * tasaDeCambio).toFixed(2) : "N/A";

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
            <div className='cart-button-container'>
                <div className="cart-button-container__price">
                    <p>$ {dolares}</p>
                    <p>Bs. {bs}</p>
                </div>
                <Button color={!inCart ? 'primary' : 'disabled' } onClick={ !inCart ? () => addToCart(motorcycle) : () => {} }>
                    { inCart ? 'Añadido' : 'Añadir al carrito' }
                </Button>
            </div>
            <DetailCharacteristics characteristics={ motorcycle.characteristics }/>
        </>
    );
}

export default MotorcycleDetail;