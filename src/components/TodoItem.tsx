import React from 'react'
import { useTodoStore, type Todo } from '../stores/useTodoStroe'

type Props = {
    todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((store) => store.deleteTodo);

    return (
        <div className='flex items-center justify-between p-2 border-b'>
            <label className='flex items-center gap-2'>
                <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.text}
                </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)} className='text-red-500'>
                삭제
            </button>
        </div>
    );
}

export default TodoItem;