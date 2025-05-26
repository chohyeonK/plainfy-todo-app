import React from 'react';
import TodoList from '../components/TodoList';

const TodoListPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        할 일 목록
      </h1>
      <TodoList />
    </div>
  );
};

export default TodoListPage;
