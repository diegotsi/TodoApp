import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
import NavBar from '../../components/NavBar/NavBar';

export default props => (
    <div>
        <NavBar/>
        <div className='container'>
        <PageHeader name='Sobre' small='Nós'/>
        <p>Feito por <a href='http://diegotsi.github.io' target='_blank'>Diego Oliveira</a></p>
        </div>
    </div>
)