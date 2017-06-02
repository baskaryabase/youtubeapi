import React,{Component} from 'react';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

export default class NavHead extends Component{
render() {
  return (
    <div className="row">
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand >
          <div style={{height:"75%", borderRight:'1px solid black'}}>
          <a href="#"><strong>instamotors</strong></a>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Car Shopping</NavItem>
          <NavItem eventKey={2} href="#">Sell your car</NavItem>
          <NavDropdown eventKey={3} title="Learn More" id="basic-nav-dropdown">
            <MenuItem eventKey={3.3}>about</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>trust&SAfety</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Contact us</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Blog</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Trust</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Terms and Service</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Login / SignUp</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}
}
