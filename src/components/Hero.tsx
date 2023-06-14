import KlickLogo from "../assets/logo.jpg"
import HeroImage from "../assets/hero.png"
import { RiFacebookLine } from "react-icons/ri"

const iconClasses = "h-10 w-10 border border-white rounded-full p-[10px]"

const Hero = () => {
    return (
        <div className="flex items-center justify-between w-5/6 mx-auto mt-20">
            {/* left side */}
            <div className="flex flex-col text-white space-y-8">
                <p className="text-[48px] leading-[72px]">
                    The Future of online shopping is just a
                    <span className="text-[#FEDD00]">
                        <img src={KlickLogo} alt="logo-image" className="w-[38px] inline-block" /> KLick away
                    </span>
                </p>

                <div className="text-[32px] leading-[48px]">
                    <p>
                        Are you a seller who wants to grow their business?
                    </p>
                    <p className="text-[#FEDD00]">
                        Be the first to know when we launch
                    </p>
                </div>

                {/* notify me */}
                <div className="flex items-center justify-between text-[24px] border-2 border-white rounded-full pl-4 pr-1 py-1">
                    <input type="text" name="email" id="email" className="text-white placeholder-[#E1E1E1] outline-none bg-inherit" placeholder="Enter your email address" />
                    <button className="bg-[#FEDD00] text-black rounded-full px-[54px] py-[10px]">Notify me</button>
                </div>

                {/* socials */}
                <div className="flex justify-between items-center gap-6">
                    <RiFacebookLine className={iconClasses} />
                </div>

            </div>

            {/* right side */}
            <div className="h-full">
                <img src={HeroImage} alt="hero" className="w-[395px] h-full" />
            </div>
        </div>
    )
}

export default Hero