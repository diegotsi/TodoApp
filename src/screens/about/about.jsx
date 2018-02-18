import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
import NavBar from '../../components/NavBar/NavBar';

export default props => (
    <div>
        <NavBar/>
        <div className='container'>
        <PageHeader name='Sobre' small='Nós'/>
        <h2>Nossa história</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        </div>
    </div>
)