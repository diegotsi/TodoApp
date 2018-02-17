import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../templates/custom.css';

import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Routes from '../config/routes';

export default props => (
    <div>
    <NavBar/>
    <div className='container'>
        <Routes/>
    </div>
    </div>
   
)