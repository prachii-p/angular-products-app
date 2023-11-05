import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/action/home.action';
import {Observable} from 'rxjs';
import {HomeState} from '../../store/reducer/home.reducer'
import { selectProducts, selectLoading, selectError } from '../../store/selector/home.selector'; // Define these selectors

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<HomeState>) {
    this.products$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
