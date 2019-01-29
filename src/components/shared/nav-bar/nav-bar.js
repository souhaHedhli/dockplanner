import React from 'react';
import './nav-bar.css';
import logoNav from '../../../assets/logo-title.svg'

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
    isTop: true,
    isOpen: false
  };
}
componentDidMount() {
  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 50;
    if (isTop !== this.state.isTop) {
        this.setState({ isTop })
    }
  })
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={`${this.state.isTop ? 'main-nav' : 'main-nav-alt'}`}>
        <Navbar className='nav-style'  expand="md">
        <img src={logoNav} alt='logo with title' className='logo-nav-style' />
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

export default NavBar
