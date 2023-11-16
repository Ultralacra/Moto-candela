import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import ContactTemplate from './../components/Contact/Contact';

const Contact = () => {
    return (
        <>
            <Banner title="ENCUÉNTRANOS"
                subtitle="ESTAMOS PARA TI EN TODO MOMENTO" 
                image={BannerImage}
            />
            <ContactTemplate />
        </>
    );
}

export default Contact;
