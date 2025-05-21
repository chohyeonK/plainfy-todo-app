import React from 'react'
import { useTodoStore } from '../stores/useTodoStroe'

const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">투두 리스트 페이지</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className='mb-2'>
                        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
