import { useState, use, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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

  async function handleAddTodo(formData: FormData) {
    try {
      const title = formData.get('title')?.toString() ?? '';
      const due_date = formData.get('due_date')?.toString() ?? '';
      const content = formData.get('content')?.toString() ?? '';
      if (!title) return;
      const createdTodo = await createTodo({ title, due_date, content });
      setTodos((prev) => [...prev, createdTodo]);
    } catch (error) {
      console.error('Failed to add todo', error);
    }
  }
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="site-body">
          <h1>Web Todo</h1>
          <TodoCreationForm action={handleAddTodo} />
          <TodoMenagement />
          <TodoList todos={todos} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
