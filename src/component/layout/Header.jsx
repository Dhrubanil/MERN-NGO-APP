import React from 'react';
import { Link } from "react-router-dom"
import Authoption from "../Authcomponent/Authoption"

function Header(props) {
    return (
        <React.Fragment>
            <header id="header">
                <Link to="/">
                    <h1 className="title">MERN Authentication App</h1>
                </Link>
                <Authoption />
            </header>
        </React.Fragment>
    );
}

export default Header;