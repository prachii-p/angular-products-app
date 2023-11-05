import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as LoginActions from '../../store/action/login.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private store:Store)
  {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required]]
    });
  }

  ngOnInit() {
    
  }

  onSubmit()
  {
    if (this.myForm.valid) {
       // Dispatch the action to update the login data
    const loginData = {
      name: this.myForm?.get('name')?.value,
      email: this.myForm?.get('email')?.value,
      mobile: this.myForm?.get('mobile')?.value
    };
    if (loginData) {
      this.store.dispatch(LoginActions.updateLoginData({ data: loginData }));
    }
    }

    setTimeout(()=>
    {
      this.router.navigate(['/home']);
    },500);
  }


}
