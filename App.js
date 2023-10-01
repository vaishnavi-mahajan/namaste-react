import React from "react"
import ReactDOM from "react-dom";

// const heading=React.createElement(
//     "h1",{id:"heading"},
//     "Namaste React 🚀"
// )
let number=1000
const Heading=()=>(
   <h1>Heading</h1>,
   {Title},
   <h2>{number+1}</h2>
)

const Title= ()=>(
    <div>
       { Heading()},
       <Heading></Heading>,
       <Heading />,
        <h1>title</h1>
    </div>
)

// const heading2= <h1>Namaste React 🚀</h1>
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Title />)