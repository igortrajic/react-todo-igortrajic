import type { Todo } from './todoInterface';
import EditableField from './EditableField';
import { useAppStore } from '../useStore';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
  const editTodo = useAppStore((state) => state.editTodo);
  const removeTodo = useAppStore((state) => state.removeTodo);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.done}
        onChange={(e) => editTodo(todo.id, { done: e.target.checked })}
      />

      <h3 className="title">
        <EditableField
          key={todo.id + '-title'}
          initialValue={todo.title}
          onSave={(val) => editTodo(todo.id, { title: val })}
          required={true}
        />
      </h3>

      <p className="description">
        <EditableField
          key={todo.id + '-content'}
          initialValue={todo.content || ''}
          onSave={(val) => editTodo(todo.id, { content: val })}
          inputType="textarea"
          placeholder="Click to add description..."
        />
      </p>

      <p>
        <time dateTime={todo.due_date} className="todo-date">
          <EditableField
            key={todo.id + '-due_date'}
            initialValue={todo.due_date || ''}
            onSave={(val) => editTodo(todo.id, { due_date: val })}
            inputType="input"
            htmlType="date"
            placeholder="Set a date"
          />
        </time>
      </p>

        <button className="buttons red" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
    </li>
  );
}
