import { Directive, Input, EmbeddedViewRef, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from "@angular/core";
import { UserStatusService } from "../services/user-status.service";
import { Subject } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { UserStatus } from "../model/user-status.enum";


@Directive({
  selector: '[userStatus]'
})
export class UserStatusDirective {

  // input has the same name as directive selector.
  // thanks to this we can write in this way - *userStatus="status"
  // structural directives are always used with asterisk *
  @Input("userStatus") status: string;

  private isDestroyed$: Subject<void> = new Subject();

  constructor(
    private userStatusService: UserStatusService, // service which holds state of user status
    private viewContainer: ViewContainerRef, // container where our dynamically create view can be attached or not :)
    private templateRef: TemplateRef<any>, // When we set directive on DOM element, angular wraps it with the ng-template tag under the hood
  ) {
  }

  ngOnInit(): void {
    this.userStatusService.userStatus$
      .pipe(
        map((userStatus: UserStatus) => userStatus === this.status),
        takeUntil(this.isDestroyed$)
      )
      .subscribe((isPermitted: boolean) => {
        if (this.viewContainer.length) {
          this.viewContainer.remove();
        }

        if (isPermitted) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.remove();
        }
      });
  }

  ngOnDestroy() {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }

}
