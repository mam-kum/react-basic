 import {  useState} from "react";
 //import { ToggleButton } from "../../hooks/Togglebutton";

 interface Iprop
{
    name:string
    id: number
}
const defaultvalue=
{
    name:"",
    id: 0
}

export function AddForm ()
{
    const [form, setform] = useState<Iprop>(defaultvalue)

const namehandler =(event:React.ChangeEvent<HTMLInputElement>)=>
{
    setform(
        {
            ...form,
        name:event.target.value
        }
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const idhandler = (event:any)=>
{
    setform(
        {
            ...form,
        id:event.target.value
        }
    )
}
const submithandler = ()=>
{
    console.log(form)
   // event.preventDefault()
    // const formdata=
    // {
    //     name:entername,
    //     //id:enterid

    // }
    // props.Onsubmitsave(formdata)
    // console.log(formdata)
}
    return (
    <>
    <form className="project-Addform"  >
     <div className="project-formtitle">
        <label>Project Name</label>
        <input type="text" name="projectname" value={form.name} onChange={namehandler}></input>
        <h2>{form.name}</h2>
     </div>
     <div className="project-formid">
     <label>Id</label>
        <input  type="number" name="projecId"  min="0.01" step="0.01" value={form.id} onChange={idhandler}></input>
        <h2>{form.id}</h2>
     </div>
    </form>
    <button className="project-formbutton" onClick={submithandler} >Add</button>
    </>  
  )
}