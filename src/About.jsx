import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import web from '../src/img/rythik-PAf9rj_DKCU-unsplash.jpg'
import ngo5 from './img/ngo5.jpeg'
import Common from './Common'

const About = () => {
    return (
        <React.Fragment>
            <Common name="Welcome to About page of" ab2="Working for an NGO is better than sitting at home dreaming about an ideal society you want to live in. The only way to achieve an ideal society is, to make one, by working positively towards societal development." imgsrc={ngo5} visit="/Contact" btnname="Contact Now" />
        </React.Fragment>
    );
};

export default About;