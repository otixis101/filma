import React from "react";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { Route, Routes } from "react-router-dom";
// import Favorites from "./pages/Favorites";

import "./uicons-regular-rounded/css/uicons-regular-rounded.css";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
            </Routes>
            {/* <Favorites /> */}
        </>
    )
}

export default App
