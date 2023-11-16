import './Contact.scss';
import TiktokLogo from './../../assets/icons/tiktok.svg';
import InstagramLogo from './../../assets/icons/instagram.svg';
import WhatsappLogo from './../../assets/icons/whatsapp.svg';
import LocationLogo from './../../assets/icons/location.svg';

const Contact = () => {
    return (
        <div className="contact">
            <div className='contact__image'>
                <h2 className='contact__image__title'>También puedes ubicarnos...</h2>
                <p className='contact__image__address'>Copacabana, Av. Intercomunal Guarenas - Guatire,
                    Guarenas 1220, Miranda</p>
                <div className='contact__image__location'>
                    <a href="https://goo.gl/maps/zhJTaF3SoBGHD1dh7" target='_blank' rel='noreferrer noopener'>
                        <img src={LocationLogo} alt="Location button" width={45} />
                    </a>
                    <h3>Ubícanos</h3>
                </div>
            </div>
            <div className='contact__info'>
                <h1 className='contact__info__title'>CONTÁCTANOS</h1>
                <h2 className='contact__info__subtitle'>Moto Candela</h2>
                <p className='contact__info__paragraph'>
                    Accede a cualquiera de nuestras <b>redes sociales</b>  y  contáctanos por la de tu preferencia. <b>Ubícanos</b> o envíanos un mensaje por <b>whatsapp</b>.
                </p>
                <div className='contact__info__logos'>
                    <a href="https://api.whatsapp.com/send/?phone=584242345435&text&type=phone_number&app_absent=0" target='_blank' rel='noopener noreferrer'><img width={40} src={WhatsappLogo} alt="WhatsappLogo" /></a>
                    <a href="https://www.tiktok.com/@motocandelaguarenas?_t=8dB3of1cly2&_r=1" target='_blank' rel='noopener noreferrer'><img width={40} src={TiktokLogo} alt="TiktokLogo" /></a>
                    <a href="https://instagram.com/motocandelaguarenas?igshid=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'><img width={40} src={InstagramLogo} alt="InstagramLogo" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;