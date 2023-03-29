import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<{ name: string; checked: boolean, id: string }[]>([]);

  const addTask = (task: any) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App
