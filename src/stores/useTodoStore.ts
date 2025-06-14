import { create } from 'zustand';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type Filter = 'all' | 'completed' | 'uncompleted';

type TodoStore = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number, newText: string) => void;
    filter: Filter;
    setFilter: (filter: Filter) => void;
    filteredTodos: () => Todo[];
};

export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [
        { id: 1, text: 'React 공부하기', completed: false },
        { id: 2, text: 'Zustand 익히기', completed: true },
        { id: 3, text: '프로젝트 구조 설계', completed: false },
    ],
    filter: 'all',
    setFilter: (filter) => set({ filter }),

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
    updateTodo: (id, newText) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            ),
        })),

    filteredTodos: () => {
        const { todos, filter } = get();
        if (filter === 'completed') return todos.filter((todo) => todo.completed);
        if (filter === 'uncompleted') return todos.filter((todo) => !todo.completed);
        return todos;
    },
}));
