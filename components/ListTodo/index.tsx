import TodoItem from '../TodoItem';
import { useAppSelector } from '../../redux/app/hook';
import { RootState } from '../../redux/app/store';
import { Todo } from '../AddTodo';

const ListTodo = () => {

  const { todos } = useAppSelector((state: RootState) => state.todos);

  return (
    <div className={'p-10'}>
      {
        todos && todos.map((todo: Todo) => {
          return (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
          );
        })
      }
    </div>
  );
};

export default ListTodo;