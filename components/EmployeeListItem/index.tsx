import styles from './styles.module.scss'

import { useRouter } from 'next/navigation';

import { Employee } from './../../graphql/types';
import { setSelectedEmployee, addVote } from './../../redux/listSlice';
import { useAppDispatch } from './../../redux/hooks';

type Props = {
  employee: Employee
  rank: number
}

export const EmployeeListItem = ({ employee, rank }: Props) => {
  const dispatch = useAppDispatch();
  const { id, name, surname, title, image, votes } = employee;

  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setSelectedEmployee(id));
    router.push(`/employee/${id}`)
  };

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addVote(id));
  };

  return (
    <div className={`flex items-center justify-between p-3`}>
      <div className='flex items-center gap-4'>
        <div className='text-xl'>#{rank} <span className='text-sm'>({votes})</span></div>
        <img className={styles.EmployeeListImage} src={image} />
        <div className='flex flex-col'>
          <a href={`/employee/${id}`} onClick={handleClick}>{name} {surname}</a>
          <div className='text-sm text-neutral-500'>({title})</div>
        </div>
      </div>
      <div>
        <div className='border border-gray-400 rounded text-sm p-2 cursor-pointer' onClick={handleVote}>
          Vote!
        </div>
      </div>
    </div>
  )
};