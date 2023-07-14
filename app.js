import React from "react";  
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1",{ id : "title" ,},"namaste react 1");
const heading2 = React.createElement("h2", {} , "namstey react 2");
const heading3 = React.createElement("h3",{}, "namaste react 3");
const heading4= React.createElement("h1" , {} , "namstey react4");

const container = React.createElement("div", {id : "container"} , [heading1, heading2 ,heading3,heading4]);
const root = ReactDOM.createRoot(
   
    document.getElementById("root"));
    root.render(container);
