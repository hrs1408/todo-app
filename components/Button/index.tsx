import styles from './button.module.scss';
import React from 'react';

type Props = {
  Icon?: React.ReactNode;
  label?: string;
}

const Button: React.FC<Props> = ({ Icon, label }) => {
  return (
    <button className={'rounded w-full flex items-center hover:bg-[#EEEEEE] p-4'}>
      {Icon && <div className={'mr-2'}>{Icon}</div>}
      {label && <div>{label}</div>}
    </button>
  );
};

export default Button;