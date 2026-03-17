// file:    src/components/todoform.tsx

import { useState, useEffect } from "react";
import { createTodo, updateTodo, getTodoById  } from "../api/todov1API"; 

interface Props {
  id?: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function TodoForm({ id, onSuccess, onCancel }: Props) {
  const [name, setname] = useState("");

  useEffect(() => {
  if (id) {
    getTodoById(id).then(data => {
      setname(data.name);
    });
  } else {
    setname("");
  }
}, [id]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    if (id) {
      await updateTodo(id, { name });
    } else {
      await createTodo({ name });
    }
    onSuccess();
    setname("");
  } catch (err) {
    console.error(err);
  }
};


return (
    <form onSubmit={handleSubmit} className="form-container">

      <input
        type="text"
        placeholder="Enter todo"
        value={name}
        onChange={e => setname(e.target.value)}
        required
      />

      {id ? (
        <>
          <button className="my-buttonYN" type="submit">
            Update Yes
          </button>

          <button
            className="my-buttonYN"
            type="button"
            onClick={() => {  
              setname("");        
              onCancel();
            }}
          >
            Update No
          </button>
        </>
      ) : (
        <button className="my-button" type="submit">
          Create
        </button>
      )}
    </form>
  );
}