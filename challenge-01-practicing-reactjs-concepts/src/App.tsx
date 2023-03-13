import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TasksPanel } from './components/TasksPanel';
import { ITask } from './components/Task';


function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  const defaultNewTask = {
    id: uuidv4(),
    message: '',
    isComplete: false
  };

  const [newTaskText, setNewTaskText] = useState<ITask>(defaultNewTask);

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

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleStatusTask(taskId: string) {
    const copyTasks = [...tasks];
    
    copyTasks.map(task => {
      if(task.id === taskId) {
        task.isComplete = !task.isComplete
      }
    });

    setTasks(copyTasks);
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
          onDeleteTask={deleteTask}
          onChangeStatusTask={handleStatusTask}
        />
      </div>
    </div>
  )
}

export default App
