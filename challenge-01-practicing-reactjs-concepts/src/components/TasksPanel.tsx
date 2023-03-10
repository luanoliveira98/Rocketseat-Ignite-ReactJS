import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TasksPanel.module.css';

import clipboardIcon from '../assets/clipboard-icon.svg';

import { Task } from './Task';

export function TasksPanel() {

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      message: "Study English",
      isComplete: true
    },
    {
      id: uuidv4(),
      message: "Study NodeJS",
      isComplete: true
    },
    {
      id: uuidv4(),
      message: "Study ReactJS",
      isComplete: false
    }
  ]);

  function countCompletedTasks() {
    if(tasks.length === 0)  return 0;

    const completedTasks = tasks.filter(task => task.isComplete);

    return `${completedTasks.length} of ${tasks.length}`;
  }

  return (
    <div className={styles.tasksPanel}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Created tasks</strong>
          <span className={styles.badge}>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Completed</strong>
          <span className={styles.badge}>{countCompletedTasks()}</span>
        </div>
      </header>

      {tasks.length === 0 &&
        <div className={styles.emptyContent}>
        <img src={clipboardIcon} alt="An icon of a clipboard" />
        <p><strong>You don't have tasks registered yet</strong></p>
        <p>Create tasks and organize your to-do items</p>
      </div>
      }

      {tasks && 
        tasks.map(task => {
          return (
            <Task 
              message={task.message} 
              isComplete={task.isComplete}
            />
          );
        })
      }
    </div>
  );
}