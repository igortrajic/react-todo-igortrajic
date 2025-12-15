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
  return responseData[0];
};
