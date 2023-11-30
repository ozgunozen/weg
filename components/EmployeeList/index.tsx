import { Employee } from '@/graphql/types';

import { EmployeeListItem } from './../EmployeeListItem';

type Props = {
  employees: Employee[]
}

export const EmployeeList = ({ employees }: Props) => {
  return (
    <ul className='divide-y'>
      {employees.map((employee, idx) => (
        <li className='' key={employee.id}>
          <EmployeeListItem employee={employee} rank={idx + 1} />
        </li>
      ))}
    </ul>
  )
};