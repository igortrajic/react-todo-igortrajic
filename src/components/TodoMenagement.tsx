interface TodoManagementProps {
  onSortChange: (sortType: string) => void;
  onFilterChange: (filterType: string) => void;
}

export default function TodoMenagement({onSortChange, onFilterChange}: TodoManagementProps) {
  return (
    <div className="todo-container">
      <button className="buttons red">Delete all</button>
      <select className="buttons"
      onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="name">By Name</option>
        <option value="date">By Date</option>
      </select>
      <select className="buttons"
      onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Not Done</option>
      </select>
    </div>
  );
}
