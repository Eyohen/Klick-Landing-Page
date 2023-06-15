import KlickLogo from "../assets/logo.jpg"
import HeroImage from "../assets/hero.png"
import { RiFacebookLine } from "react-icons/ri"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"

const iconClasses = "text-[#FEDD00] h-10 w-10 border border-[#FEDD00] rounded-full p-[10px] hover:cursor-pointer"

const Hero = () => {
    return (
        <div className="flex items-center justify-between w-5/6 mx-auto mt-6 md:mt-20 l:mt-16 xl:mt-14">
            {/* left side */}
            <div className="flex flex-col justify-between text-white space-y-8 md:w-1/2">
                <p className="text-[30px] sm:text-[48px] leading-[40px] sm:leading-[72px]">
                    The Future of online shopping is just a
                    <span className="text-[#FEDD00]">
                        <img src={KlickLogo} alt="logo-image" className="w-[38px] inline-block" /> KLick away
                    </span>
                </p>

                <div className="md:hidden">
                    <img src={HeroImage} alt="hero" className="w-[395px] h-full" />
                </div>

                <div className="text-[30px] sm:text-[32px] leading-[38px] sm:leading-[48px]">
                    <p>
                        Are you a seller who wants to grow their business?
                    </p>
                    <p className="text-[#FEDD00] mt-4">
                        Be the first to know when we launch
                    </p>
                </div>

                <div className="flex items-center justify-between sm:text-[24px] border-2 border-white rounded-full px-1 py-1 sm:pl-4 sm:pr-1 sm:py-1 w-full">
                    
                    <input type="text" name="email" id="email" className="text-white placeholder-[#E1E1E1] outline-none bg-inherit w-full px-4" placeholder="Enter your email address" />

                    <button className="bg-[#FEDD00] text-black rounded-full w-full px-1 py-2 sm:px-[54px] sm:py-[10px]">Notify me</button>
                </div>
                

                <div className="flex justify-start items-center gap-6">
                    <RiFacebookLine className={iconClasses} />
                    <AiOutlineTwitter className={iconClasses} />
                    <BsInstagram className={iconClasses} />
                    <AiOutlineYoutube className={iconClasses} />
                </div>

            </div>

            {/* right side */}
            <div className="hidden md:block h-full">
                <img src={HeroImage} alt="hero" className="w-[395px] h-full" />
            </div>
        </div>
    )
}

export default Hero