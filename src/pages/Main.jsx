import React from "react";
import { Link } from "react-router-dom";


const Main = () =>{
    return (
        <div className="welcome">
            <h1>Welcome to StockedUp!</h1>
            <Link to="/stocks">
                <button><h2>Go to your dashboard</h2></button>
            </Link>
        </div>
    )
}

export default Main