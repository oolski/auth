
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Web3 from 'web3';
import { AppState } from '../../store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private web3: Web3;

  constructor(private store: Store<AppState>) {
    this.initWeb3();
  }

  private initWeb3() {
    if (typeof window['web3'] !== 'undefined') {
      // Use MetaMask provider
      this.web3 = new Web3(window['web3'].currentProvider);
    } else {
      console.warn('No MetaMask detected. Install MetaMask to use this app.');
    }
  }

  async login() {
    if (!this.web3) {
      console.error('Web3 is not initialized. Make sure MetaMask is installed.');
      return;
    }

    try {
      // Request account access from the user
      const accounts = await this.web3.eth.requestAccounts();

      // Get the selected account
      const selectedAccount = accounts[0];

      // Dispatch actions to update the store
      this.store.dispatch(login());
      this.store.dispatch(setUser({ user: { address: selectedAccount } }));
    } catch (error) {
      console.error('Error logging in with MetaMask:', error);
      // Handle error (e.g., show a message to the user)
      this.store.dispatch(logout());
    }
  }

  logout() {
    // Dispatch actions to update the store
    this.store.dispatch(logout());
  }
}

