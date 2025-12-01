import './App.css';
import TodoList from './components/TodoList';
import TodoCreation from './components/TodoCreation';

export default function App() {
  return (
    <>
      <div className="site-body">
        <h1>Web Todo</h1>
        <TodoCreation></TodoCreation>
        <TodoList></TodoList>
      </div>
    </>
  );
}
