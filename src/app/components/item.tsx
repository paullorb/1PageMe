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
      {showButtons && (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggleComplete}
          />
          <span className={styles.text}>{text}</span>
          <div>
          <button onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
