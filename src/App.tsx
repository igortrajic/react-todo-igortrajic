import "./App.css"


export function TodoInput() {
  return (
    <div>
    <div className="todo-container">
      <input type="text" className="user-input"/>
      <input type="date" ></input>
      <button className="buttons">description</button>
      <button className="buttons">Add</button>
    </div>
    <div className="todo-container">
      <button className="buttons">Delete all</button>
      <button className="buttons">Sort</button>
    </div>
    </div>
  )
}


export function TodoItem() {
  
  return (
    <div>
  <li className="todo-list">
    <div className="todo-item">
      <input type="checkbox" />
        <div className="todo-title">dada</div>
        <div className="todo-description">dadad</div>
      <div className="todo-date">dadad</div>
      <button className="buttons">Delete</button>
    </div>
  </li>
  <li className="todo-list">
    <div className="todo-item">
      <input type="checkbox" />
        <div className="todo-title">xcxycyc</div>
        <div className="todo-description">ddfgdd</div>
      <div className="todo-date">dcxc</div>
      <button className="buttons">Delete</button>
    </div>
  </li>
  </div>
  )
}

export function TodoList (){
  return (
    <ul>
      <TodoItem></TodoItem>
    </ul>
  )
}

export default function App(){
  return (
  <>
  <div className="site-body">
    <h1>Web Todo</h1>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
  </>
  );
}