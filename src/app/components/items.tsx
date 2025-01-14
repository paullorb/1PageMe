"use client";

import { useState } from "react";
import Item from "./item";

export default function Items() {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} initialValue={item} />
      ))}
      <button onClick={() => handleAddItem("")}>Add Item</button>
    </div>
  );
}
