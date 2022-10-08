import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../../components/AddTodo';

type TypeState = {
  todos: Todo[];
}

const initialState: TypeState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      return { ...state, todos: [...state.todos, payload] };
    },
    removeTodo: (state, { payload }: PayloadAction<number | undefined>) => {
      return { ...state, todos: state.todos.filter((todo) => todo.id !== payload) };
    },
    setStatus: (state, { payload }: PayloadAction<{ id: number | undefined, completed: boolean | undefined }>) => {
      return {
        ...state, todos: state.todos.map((todo) => {
            if (todo.id === payload.id) {
              return { ...todo, completed: payload.completed };
            }
            return todo;
          },
        ),
      };
    },
  },
});

export const { addTodo, removeTodo, setStatus } = todoSlice.actions;
export default todoSlice.reducer;