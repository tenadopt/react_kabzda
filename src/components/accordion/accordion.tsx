import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
     return (
    <div>
        <AccordionTitle title={props.titleValue}/>
        { !props.collapsed  && <AccordionBody/> }
    </div>
)
}

type AccordionTitlePropsTitle = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    debugger
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}


function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </div>
    )
}

export default Accordion;