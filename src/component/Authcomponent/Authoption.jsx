import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import createContext from "../context/UserContext"
import "../../App.css"

function Authoption(props) {
    const { userData, setuserData } = useContext(createContext);
    const history = useHistory();
    const register = () => history.push('/register')
    const login = () => history.push('/login')

    const logout = () => {
        setuserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
    }

    return (
        <React.Fragment>
            <nav className="regislog">
                {userData.user ? (
                    <>
                        <h6 className="named">{userData.user.displayname}</h6>
                        <button onClick={logout}>Log Out</button>
                    </>
                ) : (
                        <>
                            <button onClick={register}>Register</button>
                            <button onClick={login}>Log In</button>
                        </>
                    )}

            </nav>
        </React.Fragment>
    );
}

export default Authoption;