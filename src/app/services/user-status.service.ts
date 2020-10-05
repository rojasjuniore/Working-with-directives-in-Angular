import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { UserStatus } from "../model/user-status.enum";
@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  constructor() { }

  private userStatusSource: BehaviorSubject<UserStatus> = new BehaviorSubject(null);
  userStatus$: Observable<UserStatus> = this.userStatusSource.asObservable();

  changeUserStatus(status): void {
    console.log('status', status)
    this.userStatusSource.next(status);
  }
}
