import { useState } from "react";
import styles from "./item.module.css";

interface ItemProps {
  initialValue: string;
}

export default function Item({ initialValue }: ItemProps) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(true);

  const handleBlurOrEnter = () => {
    if (value.trim() === "") {
      setIsEditing(true); 
    } else {
      setIsEditing(false); 
    }
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlurOrEnter}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleBlurOrEnter();
          }}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{value}</span> 
      )}
    </div>
  );
}
