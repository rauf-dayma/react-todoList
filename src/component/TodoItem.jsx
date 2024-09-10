const TodoItem = ({ item, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{item.text}</span>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        &#10005; {/* X icon for delete */}
      </button>
    </div>
  );
};

export default TodoItem;
