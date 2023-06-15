import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        console.log(screenHeight, screenWidth)
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenHeight, screenWidth]);

    return (
        <>
            <div className="bg-[#0485E8] md:h-screen py-10">
                <Header />
                <Hero />
            </div>
        </>
    );
}

export default App;
