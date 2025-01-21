import { useState } from 'react';
import { TodoItem } from '@/types/todo';

export const useTodoList = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
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

  return {
    items,
    newItem,
    showCompleted,
    handleAddItem,
    handleDeleteItem,
    handleToggleComplete,
    setNewItem,
    setShowCompleted
  };
};
