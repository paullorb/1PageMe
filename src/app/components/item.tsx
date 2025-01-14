import { useState } from "react";

interface ItemProps {
  initialValue: string;
}

export default function Item({ initialValue }: ItemProps) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(true);

  const handleBlurOrEnter = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlurOrEnter}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleBlurOrEnter(); 
          }}
        />
      ) : (
        <span>{value}</span> 
      )}
    </div>
  );
}
