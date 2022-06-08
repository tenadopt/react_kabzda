import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import {Rating} from "./components/Rating/Rating";

function sum(a: number, b: number) {
    alert(a+b)
    sum(23,12)
    sum(100,300)
}

//hello();

function App() {
    console.log("App rendering")
    return (
      <div>
<p> </p>
          <AppTitle/>
          <Rating/>
          <Accordion/>
          <Rating/>
      </div>
  )
}

function AppTitle() {
    console.log("AppTitle rendering")

    return <>This is APP component</>
}

export default App;
