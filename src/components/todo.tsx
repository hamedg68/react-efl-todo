import { Todo } from './todos.repository';
import React from 'react';

export interface TodoProps extends Todo {
  onClick: (id: Todo['id']) => void;
  onDelete: (id: Todo['id']) => void;
}

export const TodoItem = React.memo(function TodoItem({
  onClick,
  onDelete,
  ...todo
}: TodoProps) {
  return (
    <div
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      className="mb-2"
    >
      <span onClick={() => onClick(todo.id)} style={{ marginRight: '10px' }}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </div>
  );
});
