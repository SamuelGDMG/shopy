import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<>Test</>}/>
            <Route path="/carrinho" element={<></>}/>
        </Routes>
    </BrowserRouter>
);

export default App;
