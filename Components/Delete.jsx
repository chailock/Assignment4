import React, { useState } from "react";

const DeleteButtonArray = () => {
  const [items, setItems] = useState([
    (file = "file"),
    (firstname = "firstname"),
    (tittle = "tittle"),
  ]);

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {file}

            <i
              class="fa-solid fa-trash"
              onClick={() => handleDelete(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteButtonArray;
