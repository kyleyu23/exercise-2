import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { submit } from '../state/check-in.actions';
import { UserInfo } from './user-info-interface';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  checkInForm = this.fb.group({
    dateOfBirth: [''],
    zipCode: [''],
  });

  userInfo$: Observable<UserInfo>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ userInfo: UserInfo }>
  ) {
    this.userInfo$ = this.store.select('userInfo');
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.checkInForm.value);
    // this.store.dispatch(submit(??));
  }
}
