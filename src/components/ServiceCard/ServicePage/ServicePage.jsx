import React from 'react';
import "./ServicePage.scss";
import { CardInfo } from '../cardIcons';
import { ServiceCard } from '../ServiceCard';

export const ServicePage = () => {
    return (
        <>
            <div className='card-group'>
                {CardInfo.map(card => (
                    <ServiceCard title={card.title} description={card.description} icon={card.icon} key={card.title} />
                ))}
            </div>
        </>
    )
}
