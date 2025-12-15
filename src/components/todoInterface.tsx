export type BaseTodo = {
  title: string;
  done: boolean;
  due_date?: string;
  content?: string;
};

export type Todo = BaseTodo & {
  id: number;
};
