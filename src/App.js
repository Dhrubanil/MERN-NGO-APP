import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Footer from './footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "./component/Authcomponent/Login"
import Register from "./component/Authcomponent/Register"
import UserContext from "./component/context/UserContext"
import Axios from "axios";
// import "./App.css"

function App() {
  const [userData, setuserData] = useState({
    token: undefined,
    user: undefined,
  })
  useEffect(() => {
    const checkLoggedin = async () => {
      let token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = ""
      }
      const tokenRes = await Axios.post("http://localhost:5000/tokenIsValid", null, { headers: { "x-auth-token": token } });
      if (tokenRes.data) {
        const getresdata = await Axios.get("http://localhost:5000/", { headers: { "x-auth-token": token } },)
        setuserData({
          token,
          user: getresdata.data
        })
      };
    }
    checkLoggedin();
  }, [])
  return (
    <React.Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setuserData }}>
          <Menu />
          <Switch>
            <Route exact path='/' component={() => { return <Home /> }} />
            <Route exact path='/service' component={() => { return <Service /> }} />
            <Route exact path='/about' component={() => { return <About /> }} />
            <Route exact path='/contact' component={() => { return <Contact /> }} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
