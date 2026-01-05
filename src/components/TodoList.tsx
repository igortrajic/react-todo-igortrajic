import TodoItem from '../components/TodoItem';
import type { Todo } from './todoInterface';

interface TodoListProps {
  todos: Todo[];
  deleteAction: (formData: FormData) => void;
  editAction: (formData: FormData) => void;
}

export default function TodoList({
  todos,
  deleteAction,
  editAction,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteAction={deleteAction}
          editAction={editAction}
        />
      ))}
    </ul>
  );
}
