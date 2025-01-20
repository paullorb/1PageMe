"use client";

import { useState } from "react";
import Item from "./item";
import styles from "./item.module.css";

export default function Items() {
  const [items, setItems] = useState<{ text: string; completed: boolean }[]>([]);
  const [newItem, setNewItem] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem.trim(), completed: false }]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleToggleComplete = (index: number) => {
    setItems(items.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    ));
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const displayedItems = showCompleted ? items.filter(item => item.completed) : items;

  return (
    <div className={styles.container}>
      <button onClick={toggleShowCompleted}>
        {showCompleted ? "Show All" : "Show Completed"}
      </button>
      <div>
        {displayedItems.map((item, index) => (
          <Item
            key={index}
            text={item.text}
            completed={item.completed}
            onDelete={() => handleDeleteItem(index)}
            onToggleComplete={() => handleToggleComplete(index)}
            showButtons={!showCompleted}
          />
        ))}
      </div>
      <div className={styles.item}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          className={styles.input}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddItem} className={styles.addButton}>Add</button>
      </div>
    </div>
  );
}
