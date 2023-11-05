import {createAction, props} from '@ngrx/store';

export const updateLoginData = createAction('[Login Page] Update Login Data', props<{data:any}>());