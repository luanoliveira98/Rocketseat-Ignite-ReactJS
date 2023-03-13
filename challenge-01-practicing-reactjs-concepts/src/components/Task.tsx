import styles from './Task.module.css';

import { Trash } from 'phosphor-react';

import { Checkbox } from './Checkbox';
import { ChangeEvent } from 'react';

export interface ITask {
  id: string;
  message: string;
  isComplete: boolean;
}

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onChangeStatusTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onChangeStatusTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleStatusTask() {
    onChangeStatusTask(task.id);
  }

  return (
    <div className={styles.task}>
      <div>
        <Checkbox 
          checked={task.isComplete}
          onChange={handleStatusTask} 
        />
        <p className={task.isComplete ? styles.completed : ''}>{task.message}</p>
      </div>
      <button onClick={handleDeleteTask} title="Delete Task">
        <Trash size={24}/>
      </button>
    </div>
  )
}