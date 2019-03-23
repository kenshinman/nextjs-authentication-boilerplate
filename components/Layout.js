// import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";
import { Nav, Navbar } from "react-bootstrap";

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {(isAuthenticated, deauthenticate)}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" /> */}
      {/* <link rel="stylesheet" href="static/css/bootstrap.min.css" /> */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      {/* <link rel="stylesheet" href="/static/css/main.css"/> */}
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      />
    </Head>
    <div className="">
      <Navbar>
        <Navbar.Brand href="#home">Web App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/whoami">Profile</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            {!isAuthenticated && <Nav.Link href="/signin">Signin</Nav.Link>}
            {isAuthenticated && (
              <Nav.Link
                onClick={e => {
                  e.preventDefault();
                  deauthenticate();
                }}
                href="">
                Signout
              </Nav.Link>
            )}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    {children}
    <style jsx global>
      
      {`
        .container {
          max-width: 800px !important;
        }
      `}
    </style>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
