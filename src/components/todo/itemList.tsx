"use client";

import Item from "./item";
import styles from "./itemList.module.css";
import { useTodoList } from "../../hooks/useTodoList";

export default function Items() {
  
    const {
    newItem,
    showCompleted,
    displayedItems,
    completedCount,
    handleAddItem,
    handleDeleteItem,
    handleToggleComplete,
    handleKeyPress,
    setNewItem,
    setShowCompleted
  } = useTodoList();


  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={styles.counter}>
      </div>
        <div className={styles.counter} onClick={() => setShowCompleted(false)}>
          Ɐ ({displayedItems.length})
        </div>
        <div className={styles.counter} onClick={() => setShowCompleted(true)}>
          ✓ ({completedCount})
        </div>
      </div>
      <div className={styles.category}>
          <button>+</button>
        <div className={`${styles.counter} ${styles.category}`}>
          &lt;/&gt;
        </div>
      </div>
      <div className={styles.items}>
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
