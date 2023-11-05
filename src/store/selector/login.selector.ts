import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../reducer/login.state';

const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectLoginData = createSelector(selectLoginState, (state) => state.data);