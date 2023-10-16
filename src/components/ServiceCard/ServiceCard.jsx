import React from 'react';
import './ServiceCard.scss';
import { Button } from '../Button/Button';

export const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className='s-card'>
            <div className='s-card__icon'>
                <img src={icon} alt="service-image" width={50} />
            </div>
            <h2 className='s-card__title'>{title}</h2>
            <p className='s-card__description'>{description}</p>
            <Button children="Ver más" color="primary"/>
        </div>
    )
}
