import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import ngo1 from './img/ngo1.jpeg'
import { NavLink } from 'react-router-dom'
import './index.css'
import './App.css'
import Authoption from "./component/Authcomponent/Authoption"

const Menu = () => {
    return (
        <React.Fragment>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid bgl">
                                <img src={ngo1} className='main_logo' alt="Sorry" />
                                <NavLink exact className="navbar-brand" to="/">GCELT NGO APP</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link" to="/service">NGO</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>



                                    </ul>
                                </div>
                                <Authoption />
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Menu;