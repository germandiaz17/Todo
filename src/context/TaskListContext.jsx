import { createContext, useState } from "react";

const TaskListContext = createContext()

const TaskListProvider = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const [list, setList] = useState([])
    const [listDelete, setListDelete] = useState([])
    const [all, setAll] = useState([])


    //agregar tareas
    const hanldeInfo = (text, id, statusTask) => {
        setAll(list)
        if(text === "") {
            alert("no se puede enviar un texto vacio")
        }else{
            setList([...list, {text, id, statusTask}])
        }
    }

    //completar tarea
    const hanldeComplete = (id) => {
        setList([...list.map(task => task.id === id ? task.statusTask === false ?{...task, statusTask: true} : {...task, statusTask: false} : task)])
    }


    //pepelera de reciclaje
    const handleDelete = (text, id) => {
        setListDelete([...listDelete, {text, id}])
        setList(list.filter(item => item.id !== id))
    }



    //filtracions

    const viewAll = () => {
        setList(all)
        // console.log(all)
    }

    const viewdelete = () => {
        setList(listDelete)
    }


    const data = {list, hanldeInfo, handleDelete, hanldeComplete, viewAll, viewdelete}

    return(
        <TaskListContext.Provider value={data}>
            {children}
        </TaskListContext.Provider>
    )
}

export {TaskListProvider}
export default TaskListContext