import React from 'react'
import { useTodoStore } from '../stores/useTodoStroe'
import TodoItem from '../components/TodoItem'

const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <div className="p-4">
            {todos.length === 0 ? (
                <p className='text-center text-gray-500'>
                    할 일이 없습니다.
                </p>) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
            <hr />
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
