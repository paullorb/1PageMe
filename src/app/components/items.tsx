"use client";

import styles from "./items.module.css";
import { useState } from "react";
import Item from "./item";

export default function Items() {
  const [items, setItems] = useState<string[]>([""]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  const handleSave = (id: number, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => (index === id ? value : item))
    );

    if (value.trim() && id === items.length - 1) {
      setItems((prevItems) => [...prevItems, ""]);
    }
  };

  const handleComplete = (id: number) => {
    setItems((prevItems) => {
      const completedItem = prevItems[id];
      setCompletedItems((prevCompleted) => [...prevCompleted, completedItem]);
      return prevItems.filter((_, index) => index !== id);
    });
  };

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((_, index) => index !== id));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button type="button" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>
      </header>
      {showCompleted ? (
        <div className={styles.items}>
          {completedItems.map((item, index) => (
            <div key={index} className={styles.completedItem}>
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.items}>
          {items.map((item, index) => (
            <Item
              key={index}
              initialValue={item}
              onSave={(value) => handleSave(index, value)}
              onDelete={() => handleDelete(index)}
              onComplete={() => handleComplete(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
