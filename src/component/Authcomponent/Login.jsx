import React, { useState, useContext } from 'react';
import Axios from "axios";
import createContext from "../context/UserContext"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from 'react-router-dom';
import Loginerr from "../Error/Loginerr"
import avatar from '../../img/avatar.svg'
import bg from '../../img/bg.svg'
import wave from '../../img/wave.png'
import "../Authcomponent/Gp.css"



function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { userData, setuserData } = useContext(createContext)
    const history1 = useHistory();
    const submitevent = async (e) => {
        e.preventDefault();
        try {
            const newUserlogin = { email, password };
            const loginRes1 = await Axios.post("http://localhost:5000/login", newUserlogin);
            setuserData({
                token: loginRes1.data.token,
                user: loginRes1.data.user,
            });
            localStorage.setItem("auth-token", loginRes1.data.token);
            history1.push("/service")
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    }
    return (
        <React.Fragment>
            {/* <div className="container contact_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="form_group">
                            <h2 >Log In Here</h2>
                        </div>
                        <form onSubmit={submitevent} >
                            {error && <Loginerr message={error} handleerr={() => { setError(undefined) }} />}
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter mail" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-outline-primary " >Log In</button>
                        </form>
                    </div>
                </div>
            </div> */}
            {error && <Loginerr message={error} handleerr={() => { setError(undefined) }} />}
            <img className="wave" src={wave} />
            <div className="container">
                <div className="img">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src={avatar} />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="email" className="input" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="password" id="exampleInputPassword1" name="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" onClick={submitevent} className="btng" value="Login" />
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Login;