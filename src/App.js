
import './App.css';
import {TaskItem} from "./TaskItem";

function App() { 

  const handleTaskChange = () =>{
    console.log("changed!");
  };

  return (
    <main> 
        <form>
          <input type="text" placeholder="Task name"/>
          <button>Create Task</button>
        </form>

        <ul>  
          <TaskItem isChecked={true} taskName="Learn React" onTaskChange={handleTaskChange} />
          <TaskItem isChecked={false} taskName="Learn Hooks" onTaskChange={handleTaskChange} />
          <TaskItem isChecked={false} taskName="Keep on Keeping on" onTaskChange={handleTaskChange}/>
        </ul>

    </main>
  );
}

export default App;
