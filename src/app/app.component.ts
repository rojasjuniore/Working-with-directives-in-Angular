import { Component } from '@angular/core';
import { UserStatusService } from "./services/user-status.service";
import { UserStatus } from "./model/user-status.enum"


@Component({
  selector: 'app-root',
  template: `
  <section>
    <h1>Structural directives</h1>
    <div *userStatus="UserStatus.ANONYMOUS">I am anonymous user</div>
    <div *userStatus="UserStatus.USER">I am common user</div>
    <div *userStatus="UserStatus.ADMIN">I am admin user</div>
    <hr/>
    <div>
      <button (click)="changeUserStatus(UserStatus.ANONYMOUS)">Anonymous</button>
    </div>
    <div>
      <button (click)="changeUserStatus(UserStatus.USER)">User</button>
    </div>
    <div>
      <button (click)="changeUserStatus(UserStatus.ADMIN)">Admin</button>
    </div>
  </section>

    <hr />
    <section>
      <h1>Attribute directives</h1>
      <input type="text" ctrlEnter (onCtrlEnter)="handleCtrlEnterEvent($event)">
    </section>
    
  `,
  styles: []
})
export class AppComponent {
  UserStatus = UserStatus;

  constructor(private userStatusService: UserStatusService) { }

  changeUserStatus(status: UserStatus): void {
    this.userStatusService.changeUserStatus(status);
  }

  handleCtrlEnterEvent(event): void {
    console.log(event);
  }
}
