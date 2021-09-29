//styles
import './App.css';

//components
import Home from './components/Home';

//context
import { TaskListProvider } from './context/TaskListContext';

function App() {
  return (
    <div className='App'>
      <TaskListProvider>
        <Home />
      </TaskListProvider>
    </div>
  );
}

export default App;
