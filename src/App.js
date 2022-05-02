import { useState } from "react";
import InputText from "./component/InputText"
import './App.css';
import Button from "./component/Button";
import List from "./List";

function App() {

  const [nameTask, setNameTask] = useState('');
  const [tasks, setTasks] = useState([{
    id: 1,
    name: "prueba",
    done: false
  }]);

  function addTasks(name) {
      setTasks(oldArray => [...tasks,{
          id: tasks[tasks.length - 1].id + 1,
          name: nameTask,
          done: false
      }])
  }

  return (
    <div className="App">
      <header>
        
      </header>
      <main>
      <InputText text="Nombre la tarea" value={nameTask} _callback={event => setNameTask(event.target.value)} />
      <Button text="Añadir" _callback={() => addTasks(nameTask)} />
      <List tasks={tasks} _stateTasks={setNameTask}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
