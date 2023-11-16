import Register from "../auth/Register/Register"
import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.png";
import BannerFill from "../assets/banners/banner-fill.png";
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default () => {
	return (
		<div className="parent-container">
			<Banner
				image={BannerImage}
				title="MOTO CANDELA"
				subtitle="Guarenas"
			/>
			<div className="login-container">
				<Register />
			</div>
			<Banner 
				image={BannerFill}
			/>
			<ServiceSection />
			<ContactSection />
		</div>
	);
}