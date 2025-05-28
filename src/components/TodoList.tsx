import React from 'react';
import { useTodoStore } from '../stores/useTodoStore';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
    const navigate = useNavigate();

    const filter = useTodoStore((state) => state.filter);
    const todos = useTodoStore((state) => state.todos);
    const setFilter = useTodoStore((state) => state.setFilter);

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'uncompleted') return !todo.completed;
        return true; // 'all'
    });

    return (
        <div className="p-4">
            {filteredTodos.length === 0 ? (
                <p className="text-center text-gray-500">할 일이 없습니다.</p>
            ) : (
                filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
            <hr className="my-4" />
            <div className="space-x-2">
                <button onClick={() => navigate('/add')} className="bg-green-500 text-white p-2 mb-4">
                    추가
                </button>
                <button onClick={() => setFilter('completed')} className="bg-blue-500 text-white p-2">
                    완료만 보기
                </button>
                <button onClick={() => setFilter('uncompleted')} className="bg-yellow-500 text-white p-2">
                    미완료만 보기
                </button>
                <button onClick={() => setFilter('all')} className="bg-gray-500 text-white p-2">
                    전체 보기
                </button>
            </div>
        </div>
    );
};

export default TodoList;
