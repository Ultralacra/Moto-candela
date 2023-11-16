import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

export default ({children}) => {

    const [selected, setSelected] = useState("");
    const handleSelection = selection => setSelected(selection);

    const navigation = [
        { name: "Motos", path: "/motos" },
        { name: "Repuestos", path: "/repuestos" },
        { name: "Servicios", path: "/servicios" },
        { name: "Contacto", path: "/contacto" },
        { name: "Carrito", path: "/cart" },
        { name: "Ingresar", path: "/login" },
    ];

    const socials = [
        { name: "whatsapp", link: "https://api.whatsapp.com/send/?phone=584242345435&text&type=phone_number&app_absent=0" },
        { name: "tiktok", link: "https://www.tiktok.com/@motocandelaguarenas?_t=8dB3of1cly2&_r=1" },
        { name: "instagram", link: "https://instagram.com/motocandelaguarenas?igshid=MzRlODBiNWFlZA==" },
        { name: "mail", link: "mailto:moto@candela.com" }
    ]

    return (
        <div className="layout">
            <Header navigation={navigation}
                selected={selected} handleSelection={handleSelection} />
            <main>{children}</main>
            <Footer links={navigation} active={selected} socials={socials}
                handler={handleSelection} />
        </div>
    );
}