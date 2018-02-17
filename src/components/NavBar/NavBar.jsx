import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';

import './NavBar.css';

class NavBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
                <Navbar color={'primary'}>
                <div className='container'>
                    <NavbarBrand href="/">TodoApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/todos">Tarefas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">Sobre</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            
        )
    }
}

export default NavBar;