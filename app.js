import React from "react";  
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1",{ id : "title" ,},"namaste react 1");
const heading2 = React.createElement("h2", {} , "namstey react 2");
const heading3 = React.createElement("h3",{}, "namaste react 3");
const heading4= React.createElement("h1" , {} , "namstey react4");

const container = React.createElement("div", {id : "container"} , [heading1, heading2 ,heading3,heading4]);

 const heading = (
    <h1 id = "title" key = " h2" >
        Namaste React 
    </h1>
 );

//  const HeaderComponent = () => {
//     return (
//         <div>
//             <h2> Namaste React functional component</h2>
//             <h2> this is a tag h2</h2>
//         </div>
//     );

//  };
 var xyz = 10;
const HeaderComponent = () => {
    return (
        <div>
           
            {xyz}  {/*whenever we write jsx  we can write any piece of javascript code in { } */}
            {heading}
            <h2> Namaste React functional component</h2>
            <h2> this is a tag h2</h2>
        </div>
    );

 };

const root = ReactDOM.createRoot(
   
    document.getElementById("root"));
    // root.render(container); 

    // root.render(heading);
    root.render(<HeaderComponent/>)






