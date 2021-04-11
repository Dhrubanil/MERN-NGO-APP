import React from 'react'
import Card from './Card'
import Arr from './Arr'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

const Service = () => {
    return (
        <React.Fragment>
            <div className="mt-3">
                <h1 className="text-center  font-weight-bolder font ">Our Connection</h1>
                <div className='container-fluid mt-5 mb-5 '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row gy-4">
                                {Arr.map((val, index) => {
                                    return (
                                        <Card index={val.ID} imgsrc={val.imgsrc} contact={val.contact} sname={val.sname} link={val.link} />
                                    );
                                })};
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    );
};

export default Service;