import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './../graphql/types';
import { AppThunk, AppState } from './store';
import { apolloClient } from './../graphql/client';
import { getEmployees } from './../graphql/getEmployees.query';
import { getEmployee } from './../graphql/getEmployee.query';
import { HYDRATE } from 'next-redux-wrapper';

export interface ListState {
  employees: Employee[],
  selectedEmployee: Employee['id'] | null,
};

const initialState: ListState = {
  employees: [],
  selectedEmployee: null,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    setSelectedEmployee: (state, action: PayloadAction<Employee['id']>) => {
      state.selectedEmployee = action.payload;
    },
    addVote: (state, action: PayloadAction<Employee['id']>) => {
      const employee = state.employees.find(({ id }) => id === action.payload);

      if (employee) {
        employee.votes++;
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(state.employees.length)
      if (state.employees.length) {
        return {...state};
      }

      return {
        ...state,
        ...action.payload.list,
      }
    }
  }
});

export const {
  setEmployees,
  setSelectedEmployee,
  addVote,
} = listSlice.actions;

export const fetchEmployees = (): AppThunk => async (dispatch) => {
  const response = await apolloClient.query({ query: getEmployees });

  dispatch(setEmployees(response.data.Employees));
};

export const fetchEmployee = (): AppThunk => async (dispatch) => {
  const response = await apolloClient.query({ query: getEmployee });

  dispatch(setEmployees([response.data.Employee]));
  dispatch(setSelectedEmployee(response.data.Employee.id));
};

export default listSlice.reducer;

const listSliceSelector = (state: AppState): ListState => state?.list;

export const selectEmployeeList = createSelector(listSliceSelector, s => s.employees);

export const selectOrderedEmployeeList = createSelector(selectEmployeeList, li => {
  return [...li].sort((a, b) => b.votes - a.votes)
})

const selectSelectedEmployeeId = createSelector(listSliceSelector, s => s.selectedEmployee);

export const selectSelectedEmployee = createSelector(
  selectEmployeeList,
  selectSelectedEmployeeId,
  (li, sId) => li.find(i => i.id === sId)
);