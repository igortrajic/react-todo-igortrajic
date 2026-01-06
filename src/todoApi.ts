import type { BaseTodo, Todo } from './components/todoInterface';

const API_URL = 'https://api.todos.in.jt-lab.ch/todos';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.status}`);
  }
  return await response.json();
};

export const createTodo = async (newTodoData: {
  title: string;
  due_date: string;
  content: string;
}): Promise<Todo> => {
  const newTodo: BaseTodo = {
    title: newTodoData.title,
    done: false,
    due_date: newTodoData.due_date || undefined,
    content: newTodoData.content,
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create todo: ${response.status} - ${errorText}`);
  }

  const responseData = await response.json();
  if (!responseData || responseData.length === 0) {
    throw new Error('API did not return the created todo in the response.');
  }
  return responseData[0];
};

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete todo: ${response.status}`);
  }
};

export const updateTodo = async (
  id: number,
  updates: Partial<BaseTodo>,
): Promise<Todo> => {
  const response = await fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error(`Failed to edit todo: ${response.status}`);
  }
  const responseData = await response.json();

  if (!responseData || responseData.length === 0) {
    throw new Error('API did not return the updated todo.');
  }

  return responseData[0];
};

export async function deleteAllTodos(): Promise<void> {
  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to delete all todos: ${response.status}`);
  }
}
