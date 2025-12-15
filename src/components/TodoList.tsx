import TodoItem from '../components/TodoItem';
import type { Todo } from './todoInterface';

interface TodoListProps {
  todos: Todo[];
  deleteAction: (formData: FormData) => void;
}

export default function TodoList({ todos, deleteAction }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteAction={deleteAction} />
      ))}
    </ul>
  );
}
