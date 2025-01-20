"use client";

import styles from "./items.module.css";
import { useState } from "react";
import Item from "./item";

export default function Items() {
  const [items, setItems] = useState<string[]>([""]);

  const handleSave = (id: number, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => (index === id ? value : item))
    );

    if (value.trim() && id === items.length - 1) {
      setItems((prevItems) => [...prevItems, ""]);
    }
  };

  const handleComplete = (id: number) => {
    console.log(`Task ${id} completed`);
  }

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((_, index) => index !== id));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button type="button">completed</button>
        <button type="button">deleted</button>
      </header>
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
  </div>
  );
}
