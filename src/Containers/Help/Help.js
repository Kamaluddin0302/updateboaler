import React from "react";
import { Navbar, Footer } from "../../Components";
import { firebaseApp } from "../../Config/Firebase/Firebase.js";
import { MDBRow, MDBCol } from "mdbreact";
import "./Help.css"
class Help extends React.Component {
  constructor() {
    super();
    this.state = {
      loginValue: "Login"
    };
  }
  componentDidMount = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loginValue: "Logout", func: "logout" });
      } else {
        this.setState({ loginValue: "login", func: "login" });
      }
    });
  };
  render() {
    return (
      <div>
        <Navbar
          loginValue={this.state.loginValue}
          login={this.login}
          logout={this.logout}
          path={this.props.history}
          dashbord={this.state.dashboard}
        />

        <div className="help_container">
          <MDBRow center>
            <MDBCol lg={6}>
               <p>Leave us a message</p>
               <div>
               <input type="text" className="help-input" /><br/>
               <input type="text" className="help-input" />
               </div>
            </MDBCol>
          </MDBRow>
        </div>


        <Footer />
      </div>
    );
  }
}

export default Help;
