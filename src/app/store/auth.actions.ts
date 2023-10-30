import { createAction, props } from '@ngrx/store';
import { User } from '../core/models/user.model';

export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');
export const setUser = createAction('[Auth] Set User', props<{ user: User }>());
