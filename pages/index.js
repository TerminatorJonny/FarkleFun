import React from "react";
import Header from "./Header";
import Instruct from "./Instruct";
import Midsec from "./Midsec";
import Footer from "./Footer";


const App = () => {
    return (
    <div className="flexbox-container">
            <div className="flexbox-item flexbox-item-1" style={{ position: "relative", minHeight: "100vh" }}>
            <Header/>
            <Instruct/>
            <Midsec/>
            <Footer/>
        </div>
    </div>
)
};

export default App;