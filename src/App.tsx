import './App.css';
import TodoList from './components/TodoList';
import TodoCreation from './components/TodoCreation';
import TodoMenagement from './components/TodoMenagement';

export default function App() {
  return (
    <>
      <div className="site-body">
        <h1>Web Todo</h1>
        <TodoCreation></TodoCreation>
        <TodoMenagement></TodoMenagement>
        <TodoList></TodoList>
      </div>
    </>
  );
}
