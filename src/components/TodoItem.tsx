import type { Todo } from './todoInterface';

interface TodoItemProps {
  todo: Todo;
  deleteAction: (FormData: FormData) => void;
}

export default function TodoItem({ todo, deleteAction }: TodoItemProps) {
  return (
    <li className="todo-item">
      <input type="checkbox" className="checkbox"></input>
      <h3 className="todo-title">{todo.title}</h3>
      <p className="todo-description">{todo.content}</p>
      <p>
        <time dateTime={todo.due_date} className="todo-date">
          {todo.due_date}
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
