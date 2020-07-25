import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import logo from '../assets/logo.png';
import '../styles/Library.css'
import { useSelector, useDispatch } from 'react-redux';
import { LogOut, ChangeFilter } from '../actions/index';
import axiosCalls from '../services/axiosCalls';

const NavBar = () => {

  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const user = useSelector(state => state.loggedInStatus);

  const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const handleLogOut = () => {
    axiosCalls.Logout()
      .then(response => {
        if (response.data.logged_out) {
          dispatch(LogOut());
        }
      })
      .catch(error => {}); // eslint-disable-line no-unused-vars
  };

  const updateStatusFilter = (status) => {
    axiosCalls.updateFilter(user.filter.id, status)
      .then(response => {
        if (response.data.status === 'updated') {
          setExpanded(false);
        }
      })
      .catch(error => {}); // eslint-disable-line no-unused-vars
  };

  const handleFilterChange = (e) =>{
    dispatch(ChangeFilter(e.target.value));
    updateStatusFilter(e.target.value)
  }

  

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" expanded={expanded}>
      <Navbar.Brand href="#">
        <img src={logo} height="40" className="d-inline-block" alt="infinity war logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <Form.Group  controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-white">Filter</Form.Label>
              <Form.Control as="select" className="mx-2" onChange={handleFilterChange} name="category"  value={filter}>
                <option value="0" >Disable</option>
                {options.split('').map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Nav>
        <Nav>
          <Navbar.Text> 
            Signed in as: <a className="text-capitalize" href="#">{user.user.name}</a>
          </Navbar.Text>
          
          <Nav>
            {user.loggedInStatus === 'LOGGED_IN' ? (
            <button type="button" className="btn btn-danger mx-0 mx-2" onClick={handleLogOut}>
              Log Out
            </button>
            ) : null}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
 
export default NavBar;