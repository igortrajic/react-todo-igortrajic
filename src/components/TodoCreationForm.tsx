export default function TodoCreationForm() {
  return (
    <form className="todo-container">
      <input type="text" className="user-input" />
      <input type="date"></input>
      <button className="buttons blue">description</button>
      <button className="buttons green">Add</button>
    </form>
  );
}
