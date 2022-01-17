import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "screens/Home";

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
            <Route path="/carrinho" element={<></>}/>
        </Routes>
    </BrowserRouter>
);

export default App;
