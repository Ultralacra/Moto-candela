import React from "react";
import FooterLogo from "/footer-logo.svg";
import FooterSlogan from "/footer-slogan.svg";
import { NavLink } from "react-router-dom";
import {
    IconBrandWhatsapp,
    IconBrandInstagram,
    IconBrandTiktok,
    IconMail,
    IconPointFilled
} from "@tabler/icons-react";
import "./Footer.scss";

export default (props) => {

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content-top">
                    <img className="footer__logo" 
                        src={FooterLogo} alt="Moto Candela" />
                    <div className="footer__title--h2">
                        ¿Qué estás esperando?
                    </div>
                    <div className="footer__title--h3">
                        Adquiere nuestra línea de productos
                    </div>
                </div>
                <div className="footer__content-bottom">
                    <div className="footer__contact">
                        <div className="footer__subtitle">CONTACTO</div>

                        <div className="footer__contact-item">
                            <p>Teléfonos:</p>
                            <p>0212-XXXXXXX / 0212-XXXXXXX</p>
                        </div>

                        <div className="footer__contact-item">
                            <p>Ubicación:</p>
                            <p>
                                Copacabana, Av. Intercomunal Guarenas - Guatire,
                                Guarenas 1220, Miranda
                            </p>
                        </div>
                    </div>
                    <div className="footer__sitemap">
                        <div className="footer__subtitle">MAPA</div>
                        <ul>
                        {props.links.map(link => {
                            const linkKey = `nav-link-${link.name}`;
                            return (
                            <li
                                key={linkKey}
                                id={linkKey}
                                className={`${(props.active === linkKey) ? "active" : ""}`} 
                                onClick={event => props.handler(event.target.id)}>
                                <NavLink to={link.path}> 
                                    <IconPointFilled
                                        size={15} 
                                        stroke={1}
                                    /> {link.name}</NavLink>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                    <div className="footer__slogan">
                        <img src={FooterSlogan} alt="Moto Candela" />
                    </div>
                </div>
                {
                    props.socials && (
                        <div className="footer__socials">
                            <div className="footer__socials-content">
                                {props.socials.map(social => {
                                    let icon;
                                    if (social.name == "whatsapp") icon = <IconBrandWhatsapp size={30} stroke={1}/>;
                                    else if (social.name == "tiktok") icon = <IconBrandTiktok size={30} stroke={1}/>;
                                    else if (social.name == "instagram") icon = <IconBrandInstagram size={30} stroke={1}/>;
                                    else icon = <IconMail size={30} stroke={1}/>;
                                    return (
                                        <a key={social.name} href={social.link}>
                                            {icon}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )
                }
                <div className="footer__endline">
                    Moto Candela &copy; {(new Date().getFullYear())}
                </div>
            </div>
        </footer>
    );
}