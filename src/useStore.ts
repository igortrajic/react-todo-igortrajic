import { create } from "zustand";
import type { Todo, BaseTodo } from "./components/todoInterface";
import { createTodo,getTodos,deleteTodo, updateTodo } from "./todoApi";


interface TodoState {
  todos: Todo[];
  sortType: string;
  filterType: string;
  errorMessage: string | null;

  setSortType: (type: string) => void;
  setFilterType: (type: string) => void;
  clearError: () => void;

  fetchTodos: () => Promise<void>;
  addTodo: (todo: { title: string; content?: string; due_date?: string }) => Promise<void>;
  removeTodo: (id: number) => Promise<void>;
  editTodo: (id: number, updates: Partial<BaseTodo>) => Promise<void>;
}

export const useAppStore = create<TodoState>((set, get) => ({
  todos: [],
  sortType: "name",
  filterType: "all",
  errorMessage: null,

  setSortType: (type) => set({ sortType: type }),
  setFilterType: (type) => set({ filterType: type }),
  clearError: () => set({ errorMessage: null }),
  fetchTodos: async () => {
    try {
      const data = await getTodos();
      set({ todos: data });
    } catch {
      set({ errorMessage: "Failed to load todos" });
    }
  },

  addTodo: async (todo) => {
    if (!todo.title) return;

    set({ errorMessage: null });
    try {
      await createTodo({
        title: todo.title,
        content: todo.content || "",
        due_date: todo.due_date || "",
      });
      await get().fetchTodos();
    } catch {
      set({ errorMessage: "Failed to create task. Please try again." });
    }
  },

  removeTodo: async (id) => {
    if (!id) return;

    set({ errorMessage: null });
    try {
      await deleteTodo(id);
      await get().fetchTodos();
    } catch {
      set({ errorMessage: "Failed to delete task." });
    }
  },

  editTodo: async (id, updates) => {
    if (!id || Object.keys(updates).length === 0) return;

    set({ errorMessage: null });
    try {
      await updateTodo(id, updates);
      await get().fetchTodos();
    } catch {
      set({ errorMessage: "Failed to modify task." });
    }
  },
}));
useAppStore.getState().fetchTodos();