import type { Todo } from './todoInterface';
import EditableField from './EditableField';

interface TodoItemProps {
  todo: Todo;
  deleteAction: (formData: FormData) => void;
  editAction: (formData: FormData) => void;
}

export default function TodoItem({
  todo,
  deleteAction,
  editAction,
}: TodoItemProps) {
  const handleSave = (field: string, newValue: string) => {
    const formData = new FormData();
    formData.append('id', todo.id.toString());
    formData.append(field, newValue);
    editAction(formData);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.done}
        onChange={(e) => handleSave('done', String(e.target.checked))}
      />

      <h3 className="title">
        <EditableField
          key={todo.title}
          initialValue={todo.title}
          onSave={(val) => handleSave('title', val)}
        />
      </h3>

      <p className="description">
        <EditableField
          key={todo.content}
          initialValue={todo.content || ''}
          onSave={(val) => handleSave('content', val)}
          inputType="textarea"
          placeholder="Click to add description..."
        />
      </p>

      <p>
        <time dateTime={todo.due_date} className="todo-date">
          <EditableField
            key={todo.due_date}
            initialValue={todo.due_date || ''}
            onSave={(val) => handleSave('due_date', val)}
            inputType="input"
            htmlType="date"
            placeholder="Set a date"
          />
        </time>
      </p>

      <form action={deleteAction}>
        <input type="hidden" name="id" value={todo.id} />
        <button className="buttons red" type="submit">
          Delete
        </button>
      </form>
    </li>
  );
}
