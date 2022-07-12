import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../check-in/user-info-interface';

export const submit = createAction(
  '[CheckIn Component] Submit',
  props<{ userInfo: UserInfo }>()
);
