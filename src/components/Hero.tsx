import Logo from "./Logo"
import HeroImage from "../assets/hero.png"
import { RiFacebookLine } from "react-icons/ri"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { useState, useEffect } from "react"
import * as CONFIG from '../config'
import { toast } from 'react-toastify';
import { COLORS } from "../constants/Color"
import { initFacebookSubscribeEvent } from "../utils/facebook"
import Checkbox from "./Checkbox"

const iconClasses = "text-[#FEDD00] md:text-white h-10 w-10 md:border border-white rounded-full p-[10px] hover:cursor-pointer"

function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const ACTION_URL = CONFIG.ACTION_URL


const Hero = () => {
    const [userEmail, setUserEmail] = useState("")
    const [eventSource, setEventSource] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }
    const submitEmail = async (e: any) => {
        e.preventDefault()

        const valid_email = validateEmail(userEmail)
        if (!valid_email) { toast.error('Invalid email address!'); return }

        try {
            const response = await fetch(ACTION_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    EMAIL: userEmail,
                    b_3e9df19052ca00cea30ef5249_a7a2381ddc: '',
                }).toString(),
            });
            const data = await response.json();
            console.log(data);

            // Display success toast notification
            toast.success('Subscription successful!');
        } catch (error) {
            toast.success('Subscription successful!');
        } finally {
            await initFacebookSubscribeEvent(userEmail, eventSource)
            setUserEmail("")
            console.log(userEmail)
        }
    }
    
    useEffect(() => {
        const eventSourceUrl = window.location.href
        setEventSource(eventSourceUrl)
    }, [eventSource])

    return (
        <div className="flex items-center justify-between w-5/6 mx-auto">
            {/* left side */}
            <div className="flex flex-col justify-between text-white space-y-8 md:w-1/2">
                <p className="text-[30px] sm:text-[48px] leading-[40px] sm:leading-[72px]">
                    The Future of online shopping is just a <Logo className="inline w-[110px] md:w-[150px] mx-2" />away
                </p>

                <div className="md:hidden mx-auto">
                    <img src={HeroImage} alt="hero" className="w-[395px] h-full" />
                </div>

                <div className="text-[30px] sm:text-[32px] leading-[38px] sm:leading-[48px]">
                    <p>
                        Are you interested in being
                    </p>
                    <li style={{ listStyleType: 'none', display: 'flex', flexDirection:'row'}}> A Buyer <Checkbox/></li>
                    <li style={{ listStyleType: 'none', display: 'flex', flexDirection:'row'}}> A Seller <Checkbox/></li>
                    <p className="text-[#FEDD00] mt-4">
                        Be the first to know when we launch
                    </p>
                </div>

                <form className="flex items-center justify-between sm:text-[24px] border border-white rounded-full px-1 py-1 sm:pl-4 sm:pr-1 sm:py-1 w-full">
                    <input type="text" autoComplete="off" defaultValue={userEmail} name="EMAIL" id="mce-EMAIL" className="text-white placeholder-[#E1E1E1] outline-none focus:outline-none bg-inherit w-full px-4" placeholder="Enter your email address" onChange={handleEmailChange} required />

                    <button onClick={(e) => submitEmail(e)} className="bg-[#FEDD00] text-black rounded-full w-full md:w-1/2 px-1 py-2 sm:px-[54px] sm:py-[10px]">Notify me</button>
                </form>


                <div className="flex justify-center md:justify-start items-center gap-6">
                    <a href="https://facebook.com/klickafricaa"><RiFacebookLine style={{ color: COLORS.SECONDARY }} className={iconClasses} /></a>
                    <a href="https://twitter.com/klick_africa"><AiOutlineTwitter style={{ color: COLORS.SECONDARY }} className={iconClasses} /></a>
                    <a href="https://www.instagram.com/klickafrica/"><BsInstagram style={{ color: COLORS.SECONDARY }} className={iconClasses} /></a>
                    <a href=""><AiOutlineYoutube style={{ color: COLORS.SECONDARY }} className={iconClasses} /></a>
                </div>

            </div>

            {/* right side */}
            <div className="hidden md:block h-full">
                <img src={HeroImage} alt="hero" className="w-full h-full" />
            </div>
        </div>
    )
}

export default Hero