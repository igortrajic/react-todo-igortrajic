import { useState } from 'react';
import { useAppStore } from '../useStore';

export default function TodoCreationForm() {
  const addTodo = useAppStore((state) => state.addTodo);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <form
      className="todo-container"
      action={async (formData) => {
        const title = formData.get('title')?.toString() || '';
        const due_date = formData.get('due_date')?.toString();
        const content = formData.get('content')?.toString();
        await addTodo({ title, due_date, content });
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
