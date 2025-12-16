import type { BaseTodo, Todo } from './components/todoInterface';

const API_URL = 'https://api.todos.in.jt-lab.ch/todos';

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
