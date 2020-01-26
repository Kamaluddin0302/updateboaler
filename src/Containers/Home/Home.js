import React from "react";
import { Navbar, Slider, AboutCoach, Footer } from "../../Components";

import { firebaseApp } from "../../Config/Firebase/Firebase.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      signup: true,
      loginValue: "Login",
      func: "login"
    };
  }

  componentDidMount = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
        this.setState({ loginValue: "Logout", func: "logout" });
      } else {
        this.setState({ loginValue: "login", func: "login" });
      }
    });
  }
  login = () => {
    this.props.histroy.push("/login");
  };
  logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/login");
      })
      .catch(error => {});
  };
  render() {
    return (
      <div>
        <Navbar
          loginValue={this.state.loginValue}
          login={this.login}
          logout={this.logout}
          path={this.props.history}
        />

        {/* <Slider /> */}

        <AboutCoach />

        <Footer />
      </div>
    );
  }
}

export default Home;
