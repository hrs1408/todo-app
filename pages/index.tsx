import type { NextPage } from 'next';
import HomeLayout from '../layouts/HomeLayout';
import Sidebar from '../components/Sidebar';
import ListTodo from '../components/ListTodo';
import AddTodo from '../components/AddTodo';


const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className={'grid grid-cols-12'}>
        <div className={'col-span-3'}>
          <Sidebar />
        </div>
        <div className={'col-span-9'}>
          <AddTodo />
          <ListTodo />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
