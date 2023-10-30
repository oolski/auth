import { User } from '../core/models/user.model';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User
}


export const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isAuthenticated: true })),
  on(AuthActions.logout, (state) => initialState),
  on(AuthActions.setUser, (state, { user }) => ({ ...state, user })),
);
