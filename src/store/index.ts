import { create } from "zustand";

interface ITodoStore {
  todo: ITodoItem[];
  setTodo: (data: ITodoItem[]) => void;
  addTodo: (payload: ITodoItem) => void;
}

interface ITodoItem {
  id: number;
  title: string;
  desc: string;
  status: "done" | "doing" | "todo";
}

export const useTodoStore = create<ITodoStore>((set) => ({
  todo: [{ title: "test", desc: "test", id: 1, status: "todo" }],
  setTodo: (data: ITodoItem[]) => set({ todo: data }),
  addTodo: (payload: ITodoItem) => {
    set((state) => ({ todo: [...state.todo, payload] }));
  },
}));
