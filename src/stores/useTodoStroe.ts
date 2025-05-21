import { create } from 'zustand';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoStore = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [
        { id: 1, text: 'React 공부하기', completed: false },
        { id: 2, text: 'Zustand 익히기', completed: true },
        { id: 3, text: '프로젝트 구조 설계', completed: false },
    ],
    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text, completed: false },
            ],
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));