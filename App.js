import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", {}, [
  React.createElement("h2", {}, "Hi i am from React"),
  React.createElement("div", { class: "card" }, [
    React.createElement("div", { class: "card-header" }, [
      React.createElement("h3", { class: "title" }, "Title"),
      React.createElement("h6", { class: "subtitle" }, "Subitle"),
    ]),
    React.createElement("div", { class: "card-body" }, 'Content'),
    React.createElement("div", { class: "card-footer" }, 'Footer'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
