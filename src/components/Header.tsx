import { FC } from 'react';
import { GlobalProps } from '../types/global';
import Logo from "/src/assets/logo.jpg"

type HeaderProps = {
    globalProps?: GlobalProps;
};

const Header: FC<HeaderProps> = ({ globalProps }) => {
    return (
        <div className="flex justify-between items-center space-x-4 w-5/6 mx-auto h-16">
            {/* Logo section */}
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Klick Logo"
                    className="w-16 h-10 mr-2"
                />
                <p className="font-bold text-4xl text-[#FEDD00]">Klick</p>
            </div>

            {/* Email section */}
            <p>
                <a
                    href="mailto:info@klick.africa"
                    className="font-bold sm:text-2xl text-white no-underline"
                >
                    info@klick.africa
                </a>
            </p>
        </div>
    );
};

export default Header;
