//styles
import { useEffect, useState } from "react"
import "../styles/form.css"

//context
import TaskListContext from "../context/TaskListContext";
import { useContext } from "react";
import nextId from "react-id-generator";

const Form = () => {
    const [text, setText] = useState("")
    const [status, setStatus] = useState(false)
    const {hanldeInfo} = useContext(TaskListContext)


    useEffect(() => {
        setText("")
    }, [hanldeInfo])

    return ( 
        <form>
            <input className='input-task' placeholder="ingresar nueva tarea" onChange={(e) => setText(e.target.value)} value={text}/>
            <button type='button' onClick={() => hanldeInfo(text, nextId(), status, setStatus)} className='btn-action'>Hacer</button>
        </form>
     );
}
 
export default Form;