import { useState } from 'react';

interface TodoCreationFormProps {
  action: (formData: FormData) => void;
}
export default function TodoCreationForm({ action }: TodoCreationFormProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <form
      className="todo-container"
      action={async (formData) => {
        action(formData);
      }}
    >
      <input type="text" className="user-input" name="title" required />

      <input type="date" name="due_date" />

      {showDescription && <textarea className="user-input" name="content" />}

      <button
        type="button"
        className="buttons blue"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? 'Hide Description' : 'Add Description'}
      </button>

      <button className="buttons green">Add</button>
    </form>
  );
}
