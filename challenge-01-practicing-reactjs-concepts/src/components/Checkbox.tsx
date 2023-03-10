import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked?: boolean;
}

export function Checkbox({ checked = false }: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  );
}