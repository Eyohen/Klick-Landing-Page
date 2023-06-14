import React, { useState } from "react";
import Container from "./components/Container";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Container>
                <h1>Count: {count}</h1>
            </Container>
        </>
    );
}

export default App;
