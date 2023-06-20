import Logo from "/src/assets/logo.jpg"


const Header = () => {
    return (
        <div className="flex justify-between items-center space-x-4 w-5/6 mx-auto pt-4">
            {/* Logo section */}
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Klick Logo"
                    className="w-[250px] md:w-[350px] mr-2"
                />
                {/* <p className="font-bold text-[36px] md:text-[64px] text-[#FEDD00]">Klick</p> */}
            </div>

            {/* Email section */}
            <p>
                <a
                    href="mailto:info@klick.africa"
                    className="font-bold text-[15px] sm:text-[32px] text-white no-underline"
                >
                    info@klick.africa
                </a>
                <p className="text-white md:text-2xl">150 Ikorodu Road, Onipanu Lagos</p>
            </p>
        </div>
    );
};

export default Header;
