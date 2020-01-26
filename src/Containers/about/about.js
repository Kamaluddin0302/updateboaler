import React from "react";
import { Navbar, Footer } from "../../Components";
import { firebaseApp } from "../../Config/Firebase/Firebase.js";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./About.css";
class About extends React.Component {
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
        <div className="about_container">
          <MDBContainer>
              <div className="heading_content">
            <h1>About Us</h1>
            <p>
              My name is Mohamed Abdi (MoFit) and I specialize in life-changing
              transformations. I have helped more than a thousands of people
              around the world gain muscle, lose body fat and become stronger
              and more toned with my online training program, which I customize
              for each of my clients.
            </p>
              </div>

            <MDBRow>
                        <MDBCol col="4">   <iframe
                            width="100%"
                            height="260px"
                            src="https://www.youtube.com/embed/dEpIsOXR_uI"
                            frameborder="1"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe></MDBCol>
              <MDBCol col="8">
                <h1>Heading Goes Here</h1>
                <p>
                  My name is Mohamed Abdi (MoFit) and I specialize in
                  life-changing transformations. I have helped more than a
                  thousands of people around the world gain muscle, lose body
                  fat and become stronger and more toned with my online training
                  program, which I customize for each of my clients.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
