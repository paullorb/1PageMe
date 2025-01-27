import { useState } from 'react';

export const useTodoList = () => {
  const [items, setItems] = useState<{ text: string; completed: boolean }[]>([]);
  const [newItem, setNewItem] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem.trim(), completed: false }]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index: number) => {
    setItems(items.map((item, i) => i === index ? { ...item, completed: !item.completed } : item));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const displayedItems = showCompleted ? items.filter(item => item.completed) : items;
  const completedCount = items.filter(item => item.completed).length;

  return {
    items,
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
  };
};
