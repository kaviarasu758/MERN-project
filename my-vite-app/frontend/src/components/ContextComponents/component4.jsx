import { useContext } from "react";
import Component3 from "./component3";
import { ThemeProvider } from "../UseContext";

var Component4=()=>{
    var result =useContext(ThemeProvider);
    return(
        <section>
            <h1>
                Component4  {result.gpa}
            </h1>
            <Component3/>
        </section>
    )
}
export default Component4;