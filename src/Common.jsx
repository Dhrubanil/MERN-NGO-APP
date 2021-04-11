import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import './index.css'

const Common = (props) => {
    return (
        <React.Fragment>
            <section id='header' className='d-flex mb-5 align-items-center'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='home_div row'>
                                <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name">GCELT NGO</strong> </h1>
                                    <h2 className="my-3">
                                        {props.ab2}
                                    </h2>
                                    <div className='mt-2'>
                                        <NavLink to={props.visit} className="btn btn_al  " id="bt_size">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Loading" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Common;