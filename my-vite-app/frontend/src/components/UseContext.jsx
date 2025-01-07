import React from "react";
import Component4 from "./ContextComponents/component4"
import '../components/css/Home.css'

export var ThemeProvider =React.createContext();

var ContactUs=()=>{
    return (
        <div>
             <ThemeProvider.Provider value={{gpa: "7.87"}}>
                <h1>Use Context: </h1>
                < Component4 />
             </ThemeProvider.Provider>
        </div>
    );
}
export default ContactUs;