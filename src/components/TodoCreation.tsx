export default function TodoCreation() {
  return (
    <div>
      <div className="todo-container">
        <input type="text" className="user-input" />
        <input type="date"></input>
        <button className="buttons">description</button>
        <button className="buttons">Add</button>
      </div>
      <div className="todo-container">
        <button className="buttons">Delete all</button>
        <button className="buttons">Sort</button>
      </div>
    </div>
  );
}
