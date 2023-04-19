import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { nanoid } from 'nanoid';
import { TodoItem, TodoState } from '../interface';

export const useTodos = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addOpen: false,
      error: null,
      formRef: null,
      addTodo: (title: string) =>
        set((state: TodoState) => {
          if (title.trim()) {
            const newTodo: TodoItem = { id: nanoid(), title, completed: false };
            return { ...state, todos: [...state.todos, newTodo] };
          }
          return state;
        }),
      removeTodo: (id: number | string) =>
        set((state: TodoState) => ({
          ...state,
          todos: state.todos.filter((item: TodoItem) => item.id !== id),
        })),
      clear: () => set({ todos: [] }),
      //   setAddOpen: (bool) =>
      //     set((state) => ({
      //       ...state,
      //       addOpen: bool,
      //     })), - WE CAN DO THIS WAY ALSO!
      setAddOpen: (bool: boolean) => set({ addOpen: bool }),
      setFormRef: (str: string) => set({ formRef: str }),
      fetchTodos: async () => {
        try {
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/todos?_limit=10'
          );
          if (!res.ok) throw new Error('Failed to fetch!');
          const newData = await res.json();
          set((state: TodoState) => {
            const newTodos = newData.filter(
              (todo: TodoItem) =>
                !state.todos.some((item) => item.id === todo.id)
            );
            return {
              ...state,
              todos: [...state.todos, ...newTodos], // Add the new todos to the state
              error: null,
            };
          });
        } catch (error: unknown) {
          set({ error: (error as Error).message });
        }
      },
    }),
    { name: 'todo-storage' }
  )
);

// export const useBearStore = create(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({ bears: get().bears + 1 }),
//     }),
//     {
//       name: "food-storage", // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );
