import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import TodoList from './components/TodoList';
import TodoMenagement from './components/TodoManagement';
import TodoCreationForm from './components/TodoCreationForm';
import { ErrorPopUp } from './components/ErrorMessage';
import { useAppStore } from './useStore';

export default function App() {
  const errorMessage = useAppStore((state) => state.errorMessage);
  const clearError = useAppStore((state) => state.clearError);

  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="site-body">
          <h1>Web Todo</h1>
          {errorMessage && (
            <ErrorPopUp message={errorMessage} onClose={clearError} />
          )}
          <TodoCreationForm />
          <TodoMenagement />
          <TodoList />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

