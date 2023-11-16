import { NavLink } from "react-router-dom";

import ContactBanner from "../../assets/banners/contact.png";

import "./ContactSection.scss";

export default () => {
    return (
        <div className="contact-section">
            <div
                className="contact-section__banner"
                style={{
                backgroundImage: `url(${ContactBanner})`
            }}>

                <div className="contact-section__banner-layer"></div>

                <div className="contact-section__title">
                    EN MOTO CANDELA
                </div>
                <div className="contact-section__subtitle">
                    Tenemos a tu disposición servicio de Delivery Gratuito en toda 
                    Caracas de Repuestos y Motos.
                </div>
                <NavLink to="/contacto" style={{ textDecoration: "none", zIndex: 1 }}>
                    <div className="contact-section__action">CONTÁCTANOS</div>
                </NavLink>
            </div>
        </div>
    );
}