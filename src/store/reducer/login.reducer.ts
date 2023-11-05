import {createReducer, on} from '@ngrx/store';
import * as LoginActions from '../action/login.action';
import {initialLoginState} from './login.state'

export const loginReducer = createReducer(
    initialLoginState,
    on(LoginActions.updateLoginData, (state,{data})=>({...state,data:data})),
);
