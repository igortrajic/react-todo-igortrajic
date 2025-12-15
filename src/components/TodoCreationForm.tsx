import { useState } from 'react';

interface NewTodoData {
  title: string;
  due_date: string;
  content: string;
}

interface TodoCreationFormProps {
  onAdd: (newTodo: NewTodoData) => void;
}

export default function TodoCreationForm({ onAdd }: TodoCreationFormProps) {
  const [title, setTitle] = useState('');
  const [due_date, setDueDate] = useState('');
  const [content, setContent] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, due_date, content });

    setTitle('');
    setDueDate('');
    setContent('');
    setShowDescription(false);
  };
  return (
    <form className="todo-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="user-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={due_date}
        onChange={(e) => setDueDate(e.target.value)}
      />
      {showDescription && (
        <textarea
          className="user-input"
          placeholder="Description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}
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
