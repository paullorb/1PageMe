interface ItemProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
  showButtons: boolean;
}

export default function Item({ text, completed, onDelete, onToggleComplete, showButtons }: ItemProps) {
  return (
    <div>
      <span>{text}</span>
      {showButtons && (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggleComplete}
          />
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
