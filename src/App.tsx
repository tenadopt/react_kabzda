import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

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
          <OnOff />
{/*
<p> </p>
          <PageTitle title={"This is APP component"}/>
          <PageTitle title={"My Friends"}/>
          <div>Article 1</div>
          <Rating value={1}/>
          <Accordion titleValue={"Menu1"} collapsed={true}/>
          <Accordion titleValue={"Users"} collapsed={true}/>
          <div>Article 2</div>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={0}/>
*/}
      </div>
  )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")

    return <h1>{ props.title }</h1>
}

export default App;
