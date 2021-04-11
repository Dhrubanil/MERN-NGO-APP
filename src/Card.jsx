import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';


const Card = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-4 col-10 mx-auto card_h">
                <div className="card card_h1">
                    <img src={props.imgsrc} className="card-img-top cardimg" alt="loading..." />
                    <div className="card-body">
                        <h3 className="card-title card1"><strong>{props.sname}</strong></h3>
                        <p className="card-text">An NGO is a private, self-governing, not-for-profit organization acting of its own volition on behalf of others. ... Because they are self-defining, NGOs are usually quite clear about their values, their goals, and the purpose of their activities, which are set forth in a charter.</p>
                        <a href={props.link} target="blank" className="btn btn_al1 btn-primary">{props.contact}</a>
                        {/* <a href={props.link} target="blank" className="btn btn_al1 btn-primary"><PersonPinCircleIcon /></a> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;