import images from '../../assets/img';
import { Phone, Mail } from '../Icons';
const Footer = () => {
    return (
        <section className="container mx-auto px-4 pt-8">
            <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:justify-between">
                <img src={images.logo} alt="logo" className="w-20 md:ml-20 md:w-36" />
                <div className="flex flex-col items-center justify-center space-y-8 text-gray-500 md:mr-20 md:flex-row md:space-x-8 md:space-y-0">
                    <a className="flex items-center space-x-4" href="tel:0912345678">
                        <Phone className="size-6 text-red-500" />
                        <p>09-123-45678</p>
                    </a>

                    <a className="flex items-center space-x-4" href="mailto:info@me.com">
                        <Mail className="size-6 text-red-500" />
                        <p>info@me.com</p>
                    </a>
                </div>
            </div>
            <div>
                <p className="mt-8 text-center text-gray-500">Copy &copy; 2021 Bella Onojie</p>
            </div>
        </section>
    );
};

export default Footer;
