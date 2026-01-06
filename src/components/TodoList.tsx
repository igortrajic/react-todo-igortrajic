import TodoItem from './TodoItem';
import { useAppStore } from '../useStore';

export default function TodoList() {
  const { todos, sortType, filterType } = useAppStore((state) => state);
  const filteredTodos = todos.filter((todo) => {
    if (filterType === 'done') return todo.done === true;
    if (filterType === 'undone') return todo.done === false;
    return true;
  });
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortType === 'date') {
      if (!a.due_date) return 1;
      if (!b.due_date) return -1;
      return a.due_date.localeCompare(b.due_date);
    }
    return a.title.localeCompare(b.title);
  });
  return (
    <ul>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
