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
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const NavBarBody = styled(Navbar)`
    margin-bottom:20px;
`

const NavLinkItem = styled(Link)`
    color:#fff !important;
    padding-right: .5rem;
    display: block;
    padding: .5rem 1rem;
    padding-left: .5rem;
    text-decoration:none;
`

const NavBarBrandItem = styled(NavbarBrand)`
    color:#fff !important;
`
class MainNavBar extends Component{
    
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
            <NavBarBody color="primary" light expand="md">
                <div className='container'>
                    <NavBarBrandItem href="/">TodoApp</NavBarBrandItem>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLinkItem to="/todos">Tarefas</NavLinkItem>
                        </NavItem>
                        <NavItem>
                            <NavLinkItem to="/about">Sobre</NavLinkItem>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </NavBarBody>
            
        )
    }
}

MainNavBar.propTypes = {
    color: PropTypes.string,
}

export default MainNavBar;