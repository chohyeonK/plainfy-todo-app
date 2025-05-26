import React from 'react'
import { useTodoStore } from '../stores/useTodoStroe'
import TodoItem from './TodoItem'
import { useNavigate } from 'react-router-dom';


const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);
    const navigate = useNavigate();


    return (
        <>
            <div className="p-4">
                {todos.length === 0 ? (
                    <p className='text-center text-gray-500'>
                        할 일이 없습니다.
                    </p>) : (
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
                <hr />
                <button onClick={() => navigate('/add')} className='bg-green-500 text-white p-2 mb-4'>추가</button>


            </div>
        </>

    )
}

export default TodoList
