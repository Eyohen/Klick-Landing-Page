import React, { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    console.log("count", count);
    setCount(count + 1);

    return (
        <>
            <div > </div>
        </>
    );
}

export default App;
