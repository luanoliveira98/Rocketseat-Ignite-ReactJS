import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TasksPanel, TaskProps } from './components/TasksPanel';

import styles from './App.module.css';
import './global.css';


function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const defaultNewTask = {
    id: uuidv4(),
    message: '',
    isComplete: false
  };

  const [newTaskText, setNewTaskText] = useState<TaskProps>(defaultNewTask);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText({
      id: uuidv4(),
      message: event.target.value,
      isComplete: false
    });
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText(defaultNewTask);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("This field is required")
  }

  return (
    <div className="App">
      <Header />

      <div className={styles.content}>
        <CreateTask 
          inputValue={newTaskText.message}
          onChangeTask={handleNewTaskChange}
          onInvalidTask={handleNewTaskInvalid}
          handleCreateNewTask={handleCreateNewTask}
        />

        <TasksPanel 
          tasks={tasks}
        />
      </div>
    </div>
  )
}

export default App
