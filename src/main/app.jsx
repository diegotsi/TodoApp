import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../templates/custom.css';

import React from 'react';
import Menu from '../templates/menu';
import Routes from './routes';

export default props => (
    <div>
    <Menu />
    <div className='container'>
        <Routes/>
    </div>
    </div>
   
)