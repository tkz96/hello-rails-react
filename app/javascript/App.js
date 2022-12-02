import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greeting from "./Greeting";
import { fetchGreeting } from "./redux/greetingSlice";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchGreeting()), []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;