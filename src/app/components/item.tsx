import styles from "./item.module.css";

interface ItemProps {
  text: string;
  completed: boolean;
  status?: string;
  onDelete: () => void;
  onToggleComplete: () => void;
  showButtons: boolean;
}

export default function Item({ text, completed, status, onDelete, onToggleComplete, showButtons }: ItemProps) {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
        className={styles.circularCheckbox}
      />
      <span className={styles.text} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      {status && <span className={styles.status}>{status}</span>}
      {showButtons && (
        <button onClick={onDelete}>Delete</button>
      )}
    </div>
  );
}
