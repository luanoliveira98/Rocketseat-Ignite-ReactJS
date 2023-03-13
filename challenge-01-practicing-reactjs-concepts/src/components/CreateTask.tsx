import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent } from 'react';
import styles from './CreateTask.module.css';

interface CreateTaskProps {
  inputValue: string;
  onChangeTask: (event: ChangeEvent<HTMLInputElement>) => void;
  onInvalidTask: (event: InvalidEvent<HTMLInputElement>) => void;
  handleCreateNewTask: (event: FormEvent) => void;
}

export function CreateTask({ inputValue, onChangeTask, onInvalidTask, handleCreateNewTask }: CreateTaskProps) {
  return (
    <form onSubmit={handleCreateNewTask} className={styles.createTask}>
      <input 
        type="text" 
        placeholder="Add a new task"
        value={inputValue}
        onChange={onChangeTask}
        onInvalid={onInvalidTask}
        required 
      />

      <button className={styles.createButton} type="submit">
        <span>Create</span>
        <PlusCircle size={16} weight="bold" /> 
      </button>
    </form>
  )
}