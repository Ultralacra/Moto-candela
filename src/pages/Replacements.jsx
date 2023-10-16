import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import { ProductList } from "../components/ProductList/ProductList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReplacements } from "../services/replacements";

export default () => {

    const navigate = useNavigate();

    const [replacements, setReplacements] = useState([]);

    const fetchReplacements = async () => {
        const replacementsData = await getReplacements();
        setReplacements(replacementsData);
    }
    useEffect(() => {
        fetchReplacements();
    }, [])

    return (
        <>
            <Banner
                image={BannerImage}
                title="ADQUIERE NUESTROS REPUESTOS"
                compact={true}
            />
            <ProductList products={replacements} searchBarLabel="Nombre o código" criteria="code" handleNavigation={(id) => navigate(`${id}`)} />
        </>
    );
}