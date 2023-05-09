import React from "react";
class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Dummy Location",
      },
    };
    console.log(this.props.name + " : constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vijaykanaujia");
    const json = await data.json();
    this.setState({
      userInfo: json,
      count: 0,
    });

    //best place to call api
    console.log(this.props.name + " :  componentDidMount");
  }

  //this call after every render except first render
  componentDidUpdate() {
    console.log(this.props.name + " : componentDidUpdate");
  }

  //this call when we leave page
  componentWillUnmount() {
    console.log(this.props.name + " : leave profile class");
  }

  render() {
    console.log(this.props.name + " : render");
    return (
      <div>
        <h2>{this.state.count}</h2>
        <h1>User Info class</h1>
        <img style={{ width: "200px" }} src={this.state.userInfo.avatar_url} />
        <p>{this.state.userInfo?.name}</p>
        <p>{this.state.userInfo?.location}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count
        </button>
      </div>
    );
  }
}

export default ProfileComponent;
