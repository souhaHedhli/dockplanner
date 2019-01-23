import React from 'react';
import './nav-bar.css';
import logo from '../../../assets/logo.svg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

 class NavBar extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar className='nav-style' expand="md">
        <img src={logo} alt='logo' className='logo-style' />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink href="/components/" className='link-nav'>About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='link-nav'>Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='link-nav'>
                  Departements
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}





/*const NavBar = () => {
    return (
      <Container>
        <Row className='nav-style'>
          <Col sm='6'>
            <img src={logo} alt='logo' className='logo-style' />
          </Col>
          <Col sm='2' className=''>
            <a href='https://docplanner.com' className='link-nav float-right'> About us </a>
          </Col>
          <Col sm='1' className='career-style'>
            <a href='https://docplanner.com/career' className=' link-nav text-center'> Creer </a>
          </Col>
          <Col sm='1'>
            <a href='https://docplanner.com/departements' className='link-nav float-left'> Departements </a>
          </Col>
        </Row>
      </Container>
    )
}*/

export default NavBar
