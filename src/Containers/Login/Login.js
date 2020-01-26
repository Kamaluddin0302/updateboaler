import React from "react";

import { Navbar } from "../../Components";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: {}
    };
  }

  componentDidMount() {
    var isAdmin = false;

    if (isAdmin) {
      //   this.props.history.push("/dashboard");
      let menu = {
        item1: "Dashboard",
        item2: "Logout"
      };
      this.setState({
        menu
      });
    } else {
      //   this.props.history.push("/Profile");
      let menu = {
        item1: "Profile",
        item2: "Logout"
      };
      this.setState({
        menu
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar menu={this.state.menu} />
        <h1> Login </h1>
      </div>
    );
  }
}

export default Login;
