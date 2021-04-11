import React, { useState, useContext } from 'react';
import Axios from "axios";
import createContext from "../context/UserContext"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from 'react-router-dom';
import Regerr from "../Error/Regerr"
// import "../Authcomponent/Ap.css"

function Register(props) {
    const [displayname, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordcheck, setcPassword] = useState();
    const [Contact, setContact] = useState();
    const [text, settext] = useState();
    const [File, setFile] = useState();
    const [Check, setCheck] = useState();
    const [error, seterror] = useState();

    const { setuserData } = useContext(createContext)
    const history = useHistory();

    const submitevent = async (e) => {
        e.preventDefault();
        try {
            const newUserrr = { email, password, passwordcheck, displayname };
            await Axios.post("http://localhost:5000/registration", newUserrr);
            const loginRes = await Axios.post("http://localhost:5000/login", { email, password });
            setuserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/service")
        } catch (err) {
            err.response.data.msg && seterror(err.response.data.msg);
        }
    }
    return (
        <React.Fragment>
            <section id="reg_bg">
                <div className="container contact_div mb-5 ">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <div className="form_group">
                                <h2 >Register Here</h2>
                            </div>
                            <form onSubmit={submitevent} >
                                {error && <Regerr message={error} handleerr={() => { seterror(undefined) }} />}
                                <div className="form-group mb-3">
                                    <label htmlFor="register-display-name">FullName</label>
                                    <input type="text" className="form-control" id="register-display-name" aria-describedby="nameHelp" placeholder="Enter Your name"
                                        onChange={(e) => setName(e.target.value)} />
                                    <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="must be atleast 6 charecter ." onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword" placeholder="must be same as mentioned above ." onChange={(e) => setcPassword(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputPhoneNumber1">Contact Number</label>
                                    <input type="number" className="form-control" id="exampleInputPhoneNumber1" placeholder="phone number" onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Write Something About You</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => settext(e.target.value)} ></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlFile1">Place your Resume here</label>
                                    <br />
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e) => setFile(e.target.value)} />
                                </div>
                                <div className="form-group mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setCheck(e.target.value)} />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary " >Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Register;