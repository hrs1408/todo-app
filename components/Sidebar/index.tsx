import { AiOutlineInbox, AiOutlineCalendar, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import Button from '../Button';

const Sidebar = () => {
  return (
    <div className={'bg-[#FAFAFA] h-screen'}>
      <div className={'pl-4'}>
        <Button Icon={<AiOutlineInbox />} label={'Inbox'} />
        <Button Icon={<AiOutlineCalendar />} label={'Today'} />
        <Button Icon={<AiOutlineUnorderedList />} label={'Upcomming'} />
        <Button Icon={<BsFillGridFill />} label={'Filters & Labels'} />
      </div>
    </div>
  );
};

export default Sidebar;