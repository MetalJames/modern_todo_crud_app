import { useState } from 'react'
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<{ name: string; checked: boolean, id: string }[]>([]);
  const [editedTask, setEditedTask] = useState<null>(null);
  const [previousFocusEl, setPreviousFocusEl] = useState<any>(null);
  const [isEdited, setIsEdited] = useState(false);

  const addTask = (task: any) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prevState => prevState.map(task => task.id === id ? { ...task, checked: !task.checked } : task))
  }

  const closeEditMode = () => {
    setIsEdited(false);
    previousFocusEl.focus();
  }

  const updateTask = (task: any) => {
    setTasks(prevState => prevState.map(oldTask => oldTask.id === task.id ? { ...task, name: task.name } : task))
    closeEditMode();
  }

  const enterEditMode = (task: any) => {
    setEditedTask(task);
    setIsEdited(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEdited && <EditForm editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode} />}
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode} />}
    </div>
  );
}

export default App
