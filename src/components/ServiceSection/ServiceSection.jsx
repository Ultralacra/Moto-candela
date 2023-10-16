import React from "react";
import { NavLink } from "react-router-dom";
import "./ServiceSection.scss";

import Replacements from "../../assets/services/replacements.jpg";
import Accessories from "../../assets/services/accessories.jpg";
import TechnicalService from "../../assets/services/technical-service.jpg";
import Selling from "../../assets/services/selling.jpg";

export default () => {

    const services = [
        {
            image: Replacements,
            title: "REPUESTOS"
        },
        {
            image: Accessories,
            title: "ACCESORIOS"
        },
        {
            image: TechnicalService,
            title: "SERVICIO TÉCNICO"
        },
        {
            image: Selling,
            title: "VENTA DE MOTOS"
        }
    ];

    return (
        <div className="service-section">
            <h1 className="service-section__title">SERVICIOS</h1>
            <div className="service-section__container">

                {services.map((service) => {
                    return (
                        <NavLink to="/servicios" 
                            key={`service-section__service-${service.title}`}
                            style={{
                                textDecoration: "none" 
                            }}>
                            <div 
                                className="service-section__service"
                                style={{
                                    backgroundImage: `url(${service.image})`
                                }}
                            >
                                <div className="service-section__service-layer animate__animated animate__fadeIn animate__slow">
                                </div>
                                <div className="service-section__service-title">
                                    {service.title}
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}