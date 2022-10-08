import { useAppDispatch } from '../../redux/app/hook';
import { useState } from 'react';
import { addTodo } from '../../redux/feature/todo/todo.slice';


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<Todo>({
    id: Math.floor(Math.random() * 100000000),
    title: '',
    completed: false,
  });

  const handleAddToto = () => {
    dispatch(addTodo(todo));
    setTodo({
      id: Math.floor(Math.random() * 100000000),
      title: '',
      completed: false,
    });
    handleReset();
  };

  const handleReset = () => {
    document.querySelectorAll('input').forEach(
      input => (input.value = '')
    );
  }

  return (
    <div className={'text-center p-10'}>
      <h1 className={'text-2xl'}>Add Todo List</h1>
      <div className={'mt-5 flex w-full'}>
        <input type='text' className={'border w-full p-2'}
               onChange={(e) => {
                 setTodo({ ...todo, title: e.target.value });
               }} />
        <button className={'p-2 bg-black text-white rounded'}
                onClick={handleAddToto}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTodo;