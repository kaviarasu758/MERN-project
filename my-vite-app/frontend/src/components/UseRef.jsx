import React, { useEffect, useRef, useState } from "react";
import '../components/css/Useref.css'

var AboutUs=()=>{
    var [text,setText]=useState("");
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text
    },[text])
    return (
        <div className="Useref">
            <h1>UseRef:</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>Current render : {text}</p>
            <p>Previous render : {prevText.current}</p>
        </div>
    );
}
export default AboutUs