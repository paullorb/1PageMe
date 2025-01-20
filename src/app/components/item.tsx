"use client";

import styles from "./item.module.css";
import { useState } from "react";

interface ItemProps {
  initialValue: string;
  onSave: (value: string) => void;
  onComplete: () => void;
  onDelete: () => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

export default function Item({ initialValue, onSave, onComplete, onDelete }: ItemProps) {
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault(); 
      onSave(value);
    }
  };
  
  const inputFieldHasValue = value.trim().length > 0;

  return (
    <form className={styles.container}>
    <div className={styles.item}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className={styles.status}>
        {inputFieldHasValue ? (
          <button type="button" className={styles.completeButton} onClick={onComplete}>✅</button>
        ) : null}
          <button type="button" className={styles.deleteButton} onClick={onDelete}>❌</button>
        </div>

      </div>
    </form>
  );
}
