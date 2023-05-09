import { Outlet } from "react-router-dom";
import ProfileComponent from "./ProfileClass";
import React from "react";
import Profile from "./Profile";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>Welcome to About Page</p>
        <ProfileComponent name="first cheild" />
        <ProfileComponent name="second cheild" />
        <Outlet />
      </div>
    );
  }
}

export default About;
