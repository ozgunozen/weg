import styles from './styles.module.scss'

import { Employee } from '@/graphql/types';

type Props = {
  employee: Employee
}

export const EmployeeDetail = ({ employee }: Props) => {
  const { name, surname, title, image, email, votes, address: { city, country, street } } = employee;
  return (
    <div className={`${styles.EmployeeDetail}`}>
      <div className='flex gap-6 w-full items-center mb-8'>
        <img className={styles.EmployeeImage} src={image} />
        <div className='flex-1'>
          <div className='divide-y mb-4'>
            <div className='text-lg font-semibold py-2'>{ name } {surname}</div>
            <div className='text-neutral-700 font-semibold py-2'>{ title }</div>
          </div>
          <div>{ email }</div>
            <div>
              { votes } Votes!
            </div>
        </div>
      </div>
      <div>Address: {street} {city} {country} </div>
    </div>
  )
};