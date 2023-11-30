import { useEffect } from 'react';
import { wrapper } from '@/redux/store'
import { fetchEmployees, selectOrderedEmployeeList } from '@/redux/listSlice'
import { EmployeeList } from '@/components/EmployeeList'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { pageViewEvent } from '@/redux/logger';

export default function Home() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectOrderedEmployeeList);

  useEffect(() => {
    dispatch(pageViewEvent('Home Page'))
  }, []);
  
  return (
    <EmployeeList employees={employees} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchEmployees());

  return {
    props: {},
  };
});