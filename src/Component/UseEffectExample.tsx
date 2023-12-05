/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState, useEffect} from "react";
//import { ToggleButton } from "../../hooks/Togglebutton";

export function UseEffectExample ()
{
    const [count, setCount] = useState(0)
    

    useEffect(()=>
    {
        console.log("one time useEffect")
    },[]
    )

    useEffect(()=>
    {
        console.log("useEffect called when count value change")
    },[count]
    )

    useEffect(() => {
        console.log("useEffect called everything");
      });
    
      function setCountValue() {
        setCount(count + 1);
      }
   return (
   <>
   
   Count with function component: {count} <br />
      <button onClick={setCountValue}>Increment value</button>
   </>  
 )
}