import React, { ChangeEventHandler } from 'react';
import { useAppDispatch } from '../../redux/app/hook';
import { removeTodo, setStatus } from '../../redux/feature/todo/todo.slice';

type TodoItemProps = {
  id?: number;
  title?: string;
  completed?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleComplete = (e:any) => {
    console.log("123");
    dispatch(setStatus({ id, completed: e.target.checked }));
  };
  return (
    <div className={'rounded flex items-center gap-10 p-3 shadow mb-4'}>
      <input type='checkbox' className={'w-[30px] h-[30px] rounded'}  onChange={e => handleComplete(e)} />
      <span>{id}.</span>
      <span
        className={(completed ? 'text-2xl text-center line-through' : 'text-2xl text-center')}>{title}</span>
      <button onClick={handleDelete}
              className={'text-red-600 w-[40px] h-[40px] rounded flex items-center justify-center bg-[#eaeaea] ml-auto font-bold'}>
        <span>X</span>
      </button>
    </div>
  );
};

export default TodoItem;