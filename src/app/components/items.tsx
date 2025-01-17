"use client";

import styles from "./items.module.css";
import { useState } from "react";
import Item from "./item";

export default function Items() {
  const [items, setItems] = useState<string[]>([""]);

  const handleAddItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className={styles.container}>
    <div className={styles.items}>
      {items.map((item, index) => (
        <Item key={index} initialValue={item} />
      ))}
    </div>
    <div className={styles.addButton}>
      <button onClick={() => handleAddItem("")}>Add Item</button>
    </div>
  </div>
  );
}
