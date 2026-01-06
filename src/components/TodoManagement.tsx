import { useAppStore } from "../useStore";

export default function TodoMenagement() {
  const setSortType = useAppStore((state) => state.setSortType)
  const setFilterType = useAppStore((state) => state.setFilterType)
  return (
    <div className="todo-container">
      <button className="buttons red">Delete all</button>
      <select
        className="buttons"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="name">By Name</option>
        <option value="date">By Date</option>
      </select>
      <select
        className="buttons"
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Not Done</option>
      </select>
    </div>
  );
}
