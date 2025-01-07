import { useMemo, useState } from "react";

var slowFunction = (num)=>{
    for (let i=0;i<1000000000;i++){
    }
    return num*2;
}
var UseMemo = () =>{
    var [theme,setTheme]=useState(true);
    var [num,setNum]=useState(0)
    var darkAndLight={
        backGround:(theme)?"white":"white",
        color:(theme)?"white":"blue",
        display:"flex"
    }
    var doubling=useMemo(()=>{
        return slowFunction(num)
    },[num])
    return(
        <div >
            <h1 style={darkAndLight}>
                This is UseMemo
            </h1>
            <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} />
            <button onClick={()=>setTheme(theme = !theme)}>Toggle menu</button>
            <p  style={darkAndLight}>{doubling}</p>
        </div>
    )
}
export default UseMemo;