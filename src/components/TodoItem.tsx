export default function TodoItem() {
  return (
    <li className="todo-item">
      <input type="checkbox" className="checkbox" />
      <h3 className="todo-title">dada</h3>
      <p className="todo-description">dadad</p>
      <p>
        <time dateTime="2025-12-01" className="todo-date">
          December 1
        </time>
      </p>
      <button className="buttons red">Delete</button>
    </li>
  );
}
