const API_URL = 'https://api.todos.in.jt-lab.ch/todos';

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
