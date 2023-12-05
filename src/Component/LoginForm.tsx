//import {useState} from 'react'

//const [count, setCount] = useState(0)
  const submithandler =()=>
  {
    //setCount(count=>(count+1))
  }
function LoginForm() {
  return (
    <>
    <form onClick={submithandler}>
        <label>Enter Name</label>
    <input type='text'></input>
    <label>Enter Password</label>
    <input type='password'></input>
    <button>OK</button>
    </form>
    
    </>
  )
}
export default LoginForm