import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import { ServicePage } from "../components/ServiceCard/ServicePage/ServicePage";

export default () => {
    return (
        <>
            <Banner image={BannerImage} title="SERVICIOS" compact={true} />
            <ServicePage />
        </>
    );
}