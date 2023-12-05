
import { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';

function Project(props: { title:string, id:number}) {
  const [visible, setvisible] = useState(false);
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

const Setvisibility=()=>
{
  setvisible(!visible)
}

const changehandler = (event:React.ChangeEvent<HTMLInputElement>) =>
{
  setnewTitle(event.target.value);
}
 
  return (
    <Box display={'inline-block'} bgcolor={"lemonchiffon"}  margin={3}>
    <div className = "project">
    <div className="project-title">
      <h2>{title}</h2>
    </div>
    <div className="project-id">{props.id}</div>
    <Button variant='contained' className="project-button" onClick={clickhandler} >Edit</Button>
    <Input placeholder="Enter Project Name " type="text" value={newtitle} onChange={changehandler}></Input>
    
    </div>
    <Button  variant='outlined' onClick={Setvisibility} >Previous State</Button>
    <Box>
     {
      ((visible)?`${nameInputRef.current}`:`default`
      )
     }     
      </Box>
    </Box>  
  )
}
export default Project