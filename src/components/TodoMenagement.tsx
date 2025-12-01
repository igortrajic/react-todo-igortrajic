export default function TodoMenagement() {
  return (
    <div className="todo-container">
      <button className="buttons red">Delete all</button>
      <select className="buttons">
        <option>By Name</option>
        <option>By Date</option>
      </select>
      <select className="buttons">
        <option>done</option>
        <option>not done</option>
      </select>
    </div>
  );
}
