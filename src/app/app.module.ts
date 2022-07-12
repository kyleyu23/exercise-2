import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInComponent } from './check-in/check-in.component';
import { StoreModule } from '@ngrx/store';
import { checkInReducer } from './state/check-in.reducer';

@NgModule({
  declarations: [AppComponent, CheckInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ userInfo: checkInReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
