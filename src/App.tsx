import { useState, use } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoMenagement from './components/TodoMenagement';
import TodoCreationForm from './components/TodoCreationForm';
import type { Todo } from './components/todoInterface';
import { getTodos, createTodo } from './addingTodo';

const todosPromise = getTodos();

export default function App() {
  const initialTodos = use(todosPromise);

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = async (newTodoData: {
    title: string;
    due_date: string;
    content: string;
  }) => {
    try {
      const createdTodo = await createTodo(newTodoData);
      setTodos((prev) => [...prev, createdTodo]);
    } catch (error) {
      console.error('Failed to add todo', error);
      alert('Failed to add todo');
    }
  };
  return (
    <>
      <div className="site-body">
        <h1>Web Todo</h1>
        <TodoCreationForm onAdd={handleAddTodo} />
        <TodoMenagement />
        <TodoList todos={todos} />
      </div>
    </>
  );
}
