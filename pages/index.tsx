
import { wrapper } from './../redux/store'
import { fetchEmployees, selectOrderedEmployeeList } from './../redux/listSlice'
import { EmployeeList } from './../components/EmployeeList'
import { useAppSelector } from './../redux/hooks';


export default function Home() {
  const employees = useAppSelector(selectOrderedEmployeeList);
  
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