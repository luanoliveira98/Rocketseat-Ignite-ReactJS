import { Checkbox } from './Checkbox';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  message: string;
  isComplete: boolean;
}

export function Task({ message, isComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <Checkbox checked={isComplete} />
        <p className={isComplete ? styles.completed : ''}>{message}</p>
      </div>
      <Trash size={24}/>
    </div>
  )
}