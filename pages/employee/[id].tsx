import { fetchEmployee, selectSelectedEmployee } from './../../redux/listSlice';
import { wrapper } from './../../redux/store';
import { useAppSelector } from './../../redux/hooks';
import { EmployeeDetail } from './../../components/EmployeeDetail';

export default function EmployeePage() {
  const employee = useAppSelector(selectSelectedEmployee);

  if (!employee) {
    return null;
  }

  return (
    <EmployeeDetail employee={employee} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchEmployee());

  return {
    props: {},
  };
});