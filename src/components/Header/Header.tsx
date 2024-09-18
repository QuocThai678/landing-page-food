import { useState } from 'react';
import images from '../../assets/img';
import { Menu } from '../Icons';
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <header className="container fixed left-0 right-0 top-0 z-50 mx-auto flex h-12 items-center justify-between bg-white px-4 md:h-16 md:justify-around">
            <div className="flex justify-center md:w-1/3">
                <img src={images.logo} className="w-20 md:w-36" alt="website logo" />
            </div>

            <ul className="hidden w-2/3 justify-around md:flex">
                <li className="font-semibold transition duration-150 ease-in hover:text-red-700">
                    <a href="#">Home</a>
                </li>
                <li className="font-semibold transition duration-150 ease-in hover:text-red-700">
                    <a href="#">Product</a>
                </li>
                <li className="font-semibold transition duration-150 ease-in hover:text-red-700">
                    <a href="#">FAQ</a>
                </li>
                <li className="font-semibold transition duration-150 ease-in hover:text-red-700">
                    <a href="#" className="">
                        Contact
                    </a>
                </li>
            </ul>

            {showMenu ? (
                <>
                    <ul className="fixed left-0 top-0 z-50 flex size-full flex-col items-center justify-center space-y-12 bg-gray-600">
                        <li className="font-semibold text-white transition duration-150 ease-in hover:text-red-700">
                            <a href="#">Home</a>
                        </li>
                        <li className="font-semibold text-white transition duration-150 ease-in hover:text-red-700">
                            <a href="#">Product</a>
                        </li>
                        <li className="font-semibold text-white transition duration-150 ease-in hover:text-red-700">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="font-semibold text-white transition duration-150 ease-in hover:text-red-700">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <Menu onClick={() => setShowMenu(!showMenu)} className="z-50 size-6 text-white" />
                </>
            ) : (
                <Menu onClick={() => setShowMenu(!showMenu)} className="z-20 size-6 md:hidden" />
            )}
        </header>
    );
};

export default Header;
