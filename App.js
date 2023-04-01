import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Reaact Element + </span>;
const Title = () => (
  <h1 className="">
    {elem}
    Namaste React Using JSX
  </h1>
);

//component composition
const HeadingComponent = () => {
  return (
    // <React.Fragment></React.Fragment>
    <>
      <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">
          Namaste React function component {100 + 200}
        </h1>
      </div>
      <div className="container-2">React fregment</div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
