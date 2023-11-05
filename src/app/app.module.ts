import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {loginReducer} from '../store/reducer/login.reducer';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from '../store/reducer/home.reducer';
import {HomeEffects} from '../store/effect/home.effect';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({
      home : reducer,
      login : loginReducer
    }),
    EffectsModule.forRoot([HomeEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }