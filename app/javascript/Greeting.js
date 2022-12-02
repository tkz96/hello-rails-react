import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
    const stateGreeting = useSelector((state) => state.greetings);
    return (
        <>
            <h1>{stateGreeting.greet}</h1>
        </>
    );
};

export default Greeting;