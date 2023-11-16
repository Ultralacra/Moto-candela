import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import DetailCharacteristics from '../components/DetailCharacteristics/DetailCharacteristics';
import BannerImage from "../assets/banners/banner.png";
import { getReplacementById } from '../services/replacements';
import CartContext from '../providers/CartContext';
import { Button } from '../components/Button/Button';

const ReplacementDetail = () => {
    const { id } = useParams();

    const [replacement, setReplacement] = useState([]);
    const { tasaDeCambio, cart, addToCart } = useContext(CartContext);
    const inCart = cart.find(item => item.id === replacement.id);
    
    const price = replacement.price ? parseFloat(replacement.price.$numberDecimal).toFixed(2) : null;
    const dolares = price ? price : "N/A";
    const bs = price ? (price * tasaDeCambio).toFixed(2) : "N/A";

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
            <div className='cart-button-container'>
            <div className="cart-button-container__price">
                    <p>$ {dolares}</p>
                    <p>Bs. {bs}</p>
                </div>
                <Button color={!inCart ? 'primary' : 'disabled' } onClick={ !inCart ? () => addToCart(replacement) : () => {} }>
                    { inCart ? 'Añadido' : 'Añadir al carrito' }
                </Button>
            </div>
            <DetailCharacteristics characteristics={ replacement.characteristics }/>
        </>
    );
}

export default ReplacementDetail;