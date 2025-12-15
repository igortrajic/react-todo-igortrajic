import TodoItem from '../components/TodoItem';
import type { Todo } from './todoInterface';

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
