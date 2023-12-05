import { useState, useRef,useEffect } from "react";
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';

//import Grid  from '@mui/material';


function Project(props: { title:string, id:number} ) {
  
  const [newtitle, setnewTitle] = useState("");
  const [title, setTitle] = useState(props.title);
  const nameInputRef = useRef<string | null>(null);

  useEffect(() => {
    nameInputRef.current = title;
  }, [title]);


  const clickhandler=()=>
{
  setTitle(newtitle);
}

const changehandler = (event:React.ChangeEvent<HTMLInputElement>) =>
{
  setnewTitle(event.target.value);
}
 
  return (
    <>
    <Box display={'inline-block'} bgcolor={"forestgreen"} justifyContent="end" margin={3}>
    <div className="project-title">
      <h2>{title}</h2>
    </div>
    <div className="project-id">{props.id}</div>
    <Button variant='contained' className="project-button" onClick={clickhandler} >Edit</Button>
    <Input placeholder="Enter Project Name " type="text" value={newtitle} onChange={changehandler}></Input>
    </Box> 
    <Box>
        Previous Project Name. {nameInputRef.current}
    </Box>
    </>
  )
}
export default Project