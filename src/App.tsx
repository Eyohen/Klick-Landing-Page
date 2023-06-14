import React, { useState, useEffect } from "react";
import Container, { SubContainer } from "./components/Container";
import Header from "./components/Header";
import { COLORS } from "./constants/Color";

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
            <Container globalProps={{ width: screenWidth }}>
                <SubContainer globalProps={{ width: screenWidth }}>
                    <Header >
                        {/* Logo section */}
                        <div style={{
                            width: '100px', height: '60px', display: 'flex', flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <img src="../src/assets/logo.jpg" alt="Google Logo"
                                style={{
                                    margin: '10px'
                                }} />
                            <p style={{
                                fontFamily: "Poppins", fontSize: '50px',
                                padding: 0, margin: 0, fontWeight: 'bold',
                                color: COLORS.SECONDARY
                            }}> Klick </p>
                        </div>
                    </Header>
                </SubContainer>
            </Container >
        </>
    );
}

export default App;
