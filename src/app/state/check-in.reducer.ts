import { createReducer, on } from '@ngrx/store';
import { DEFAULT_USER_INFO } from '../check-in/user-info-interface';
import { submit } from './check-in.actions';

export const initialState = {};

export const checkInReducer = createReducer(
  initialState,
  on(submit, (state, { userInfo }) => userInfo)
);
