import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserStatusDirective } from './directives/user-status.directive';
import { CommonModule } from '@angular/common';
import { CtrlEnterDirective } from './directives/ctrl-enter.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserStatusDirective,
    CtrlEnterDirective
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
