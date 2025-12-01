import TodoItem from '../components/TodoItem';

export default function TodoList() {
  return (
    <ul className="ListOfTodos">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </ul>
  );
}
