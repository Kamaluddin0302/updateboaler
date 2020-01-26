import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router ,Link} from "react-router-dom";
import Logo from "./../../Images/logo.png";
// import { firebaseApp } from "./../../Config/Firebase/Firebase";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    isOpen: false,
    name: ""
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // componentDidMount = () => {
  //   firebaseApp.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log(user.email);
  //       firebaseApp
  //         .firestore()
  //         .collection("users")
  //         .where("email", "==", user.email)
  //         .get()
  //         .then(querySnapshot => {
  //           if (!querySnapshot.empty) {
  //             querySnapshot.forEach(doc => {
  //               console.log(doc.id, " => ", doc.data());
  //               let data = doc.data();
  //               if (data.isAdmin) {
  //                 this.setState({
  //                   name: "Dashboard"
  //                 });
  //               } else {
  //                 this.setState({
  //                   name: "Profile"
  //                 });
  //               }
  //             });
  //           } else {
  //           }
  //         });
  //     } else {
  //     }
  //   });
  // };

  render() {
    console.log(this.props.path)
    return (
      <Router>
        <div className="navbar-section">
          <MDBNavbar dark className="navbar" expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">
                <img src={Logo} alt="Mofit Fitness" width="150px" />
              </strong>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link to ="/" className = "span" onClick={() => this.props.path.push("/")}>
                    Home
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  {this.props.dashbord ? (
                    <Link to ="/" className = "span"
                      onClick={() => this.props.path.push("/profile")}
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link to ="/" className = "span"
                      onClick={() => this.props.path.push("/dashboard")}
                    >
                     Dashboard
                    </Link>
                  )}
                </MDBNavItem>
                <MDBNavItem>
                  <Link to ="/helpandsupport" onClick={() => this.props.path.push("/helpandsupport")} className = "span">Suport & Help</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to ="/about" onClick={() => this.props.path.push("/about")} className = "span">About Us</Link >
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      {this.props.loginValue === "Login" ? (
                        <MDBDropdownItem onClick={() => this.props.login()}>
                          {this.props.loginValue}
                        </MDBDropdownItem>
                      ) : (
                        <MDBDropdownItem onClick={() => this.props.logout()}>
                          {this.props.loginValue}
                        </MDBDropdownItem>
                      )}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default Navbar;
