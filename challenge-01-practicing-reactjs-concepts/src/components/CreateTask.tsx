import { PlusCircle } from 'phosphor-react';
import styles from './CreateTask.module.css';

export function CreateTask() {
  return (
    <div className={styles.createTask}>
      <input type="text" placeholder="Add a new task" />

      <button className={styles.createButton} type="submit">
        <span>Create</span>
        <PlusCircle size={16} weight="bold" /> 
      </button>
    </div>
  )
}