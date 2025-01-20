"use client";

import styles from "./item.module.css";
import { useState, FormEvent } from "react";

interface ItemProps {
  initialValue: string;
  onSave: (value: string) => void;
  onComplete: () => void;
  onDelete: () => void;
}

export default function Item({ initialValue, onSave, onComplete, onDelete }: ItemProps) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSave(value);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
    <div className={styles.item}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <button type="button" className={styles.completeButton} onClick={onComplete}>✅</button>
        <button type="button" className={styles.deleteButton} onClick={onDelete}>❌</button>
      </div>
    </form>
  );
}
