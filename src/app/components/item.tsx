import styles from "./item.module.css";

interface ItemProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
  showButtons: boolean;
}

export default function Item({ text, completed, onDelete, onToggleComplete, showButtons }: ItemProps) {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
        className={styles.circularCheckbox}
      />
      <span className={completed ? styles.completed : ""}>{text}</span>
      {showButtons && (
        <button onClick={onDelete}>Delete</button>
      )}
    </div>
  );
}
