import { useState, use, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import TodoList from './components/TodoList';
import TodoMenagement from './components/TodoMenagement';
import TodoCreationForm from './components/TodoCreationForm';
import type { Todo, BaseTodo } from './components/todoInterface';
import { getTodos, createTodo } from './addingTodo';
import { deleteTodo } from './deleteTodo';
import { updateTodo } from './editingTodo';

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
  async function handleDeleteTodo(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;
    const previousTodos = todos;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error('Failed to delete', error);
      setTodos(previousTodos);
    }
  }

  async function handleEditTodo(formData: FormData) {
    const id = Number(formData.get('id'));
    if (!id) return;

    const title = formData.get('title')?.toString();
    const content = formData.get('content')?.toString();
    const due_date = formData.get('due_date')?.toString();
    const done = formData.get('done')?.toString();

    const updates: Partial<BaseTodo> = {};
    if (title !== undefined) updates.title = title;
    if (content !== undefined) updates.content = content;
    if (due_date !== undefined) updates.due_date = due_date;
    if (done !== undefined) {
      updates.done = done === 'true';
    }

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    );

    try {
      await updateTodo(id, updates);
    } catch (error) {
      console.error('Failed to update', error);
    }
  }
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="site-body">
          <h1>Web Todo</h1>
          <TodoCreationForm action={handleAddTodo} />
          <TodoMenagement />
          <TodoList
            todos={todos}
            deleteAction={handleDeleteTodo}
            editAction={handleEditTodo}
          />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
