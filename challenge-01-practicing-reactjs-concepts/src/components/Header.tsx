import styles from './Header.module.css';

import todoBrand from '../assets/todo-brand.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoBrand} alt="Brand of Todo" />
    </header>
  );
}