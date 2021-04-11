import React from 'react'
// import web from '../src/img/home1.png'
import ngo6 from './img/ngo6.jpeg'
import Common from './Common'

const Home = () => {
    return (
        <React.Fragment>
            <Common name="Rise your helping hand with" ab2="At ImpactGuru, we believe saving lives is a service. With the help of millions of donors online, who step up to generously support friends, colleagues and strangers with contributions, we are trying to reach each and every individual across India to ensure that no life is ever lost due to lack of money." imgsrc={ngo6} visit="/service" btnname="Support Us" />
        </React.Fragment>
    );
};

export default Home;