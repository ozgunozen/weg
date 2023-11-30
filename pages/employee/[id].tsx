import { useEffect } from 'react';
import { fetchEmployee, selectSelectedEmployee } from '@/redux/listSlice';
import { wrapper } from '@/redux/store';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { EmployeeDetail } from '@/components/EmployeeDetail';
import { pageViewEvent } from '@/redux/logger';

export default function EmployeePage() {
  const dispatch = useAppDispatch();
  const employee = useAppSelector(selectSelectedEmployee);

  useEffect(() => {
    dispatch(pageViewEvent('Home Page'))
  }, []);

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