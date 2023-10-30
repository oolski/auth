import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const isAuthenticated = createSelector(
  selectAuth,
  (auth: AuthState) => auth.isAuthenticated
);

export const selectUser = createSelector(
  selectAuth,
  (auth: AuthState) => auth.user
);
