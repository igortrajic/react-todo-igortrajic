import './App.css';
import TodoList from './components/TodoList';
import TodoMenagement from './components/TodoMenagement';
import TodoCreationForm from './components/TodoCreationForm';

export default function App() {
  return (
    <>
      <div className="site-body">
        <h1>Web Todo</h1>
        <TodoCreationForm></TodoCreationForm>
        <TodoMenagement></TodoMenagement>
        <TodoList></TodoList>
      </div>
    </>
  );
}
