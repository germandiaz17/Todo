//styles
import "../styles/home.css"

//components
import Form from "./Form";
import CardTask from "./CardTask";

//context
import TaskListContext from "../context/TaskListContext";
import { useContext } from "react";

const Home = () => {

    const {list} = useContext(TaskListContext)
    const {viewAll} = useContext(TaskListContext)
    const {viewdelete} = useContext(TaskListContext)

    return ( 
        <div className='home-content'>
            <h2>tus tareas</h2>
            <div className='form-content'>
                <Form />
            </div>
                <br />
                <hr />
                <button onClick={() => viewAll()}>Todos</button>
                <button onClick={() => viewdelete()}>Borrados</button>
                    <>
                        {
                            list?.length > 0 ? (
                                list.map((item, index) => (
                                    <CardTask key={index} text={item.text} id={item.id} statusTask={item.statusTask}/>
                                ))
                            ):
                            <h1>no hay tareas pendientes!</h1>
                        }
                    </>
        </div>
     );
}
 
export default Home;