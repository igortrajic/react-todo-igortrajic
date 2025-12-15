import type { BaseTodo } from './todoInterface';

interface TodoItemProps {
  todo: BaseTodo;
}

export default function TodoItem({ todo }: TodoItemProps) {
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
      <button className="buttons red">Delete</button>
    </li>
  );
}
