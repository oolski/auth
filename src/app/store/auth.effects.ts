import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      // Add your MetaMask/Web3 authentication logic here
      // Dispatch setUser action if authentication is successful
      map(() => ({ type: '[Auth] Set User', user: /* user data */ })),
      catchError(() => of({ type: '[Auth] Logout' })) // Handle errors
    )
  );

  // Additional effects for logout, etc.

  constructor(private actions$: Actions) {}
}
