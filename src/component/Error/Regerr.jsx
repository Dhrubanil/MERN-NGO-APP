import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Regerr(props) {
    return (
        <React.Fragment>

            <div className="form-group mb-3 regerr">
                <span> {props.message} </span>

                <button onClick={props.handleerr}> x </button>
            </div>
        </React.Fragment>
    );
}

export default Regerr;