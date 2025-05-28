import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTodoStore } from '../stores/useTodoStore';

const AddEditTaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todos, addTodo, updateTodo } = useTodoStore();
    const isEditMode = Boolean(id);
    const [text, setText] = useState("");

    useEffect(() => {
        if (isEditMode) {
            const existing = todos.find((todo) => todo.id === Number(id));
            if (existing)
                setText(existing.text);
        }
    }, [id, todos, isEditMode]);

    const handleSubmit = () => {
        if (isEditMode) {
            updateTodo(Number(id), text);
        } else {
            addTodo(text);
        }
        navigate("/");
    };

    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-4'>
                { isEditMode ? "할 일 수정" : "할 일 추가" }
            </h2>
            <input
                type='text'
                className='border p-2 w-full mb-4'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='할 일을 입력하세요.'
            />
            <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2'>
                { isEditMode ? "수정 완료" : "추가"}
            </button>
        </div>
    )
}

export default AddEditTaskPage
