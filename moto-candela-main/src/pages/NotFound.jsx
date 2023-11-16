import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";

export default () => {
    return (
        <>
            <Banner image={BannerImage} compact={true}/>
            <h1>404</h1>;
        </>
    )
};