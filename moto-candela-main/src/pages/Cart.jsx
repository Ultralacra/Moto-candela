import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import Cart from "../components/Cart/Cart";

export default () => {
    return (
        <>
            <Banner image={BannerImage} title="SERVICIOS" compact={true} />
            <Cart />
        </>
    );
}