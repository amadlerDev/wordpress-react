import React, { useState } from "react";

export default function Footer() {
    
    const [counter, setCounter] = useState(0);

    function count() {
        setCounter(counter+1)
    }

    return (
        <footer>
            <div>פוטר</div>
            <div className="counter" onClick={count}>counter : {counter}</div>
        </footer>   
    )
}