import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  private subject = new Subject<any>();
  private keepAfterNavChange = false;

  constructor(private router: Router) {
    //clear alert message when change route
    router.events.subscribe(event => {
      if (this.keepAfterNavChange) {
        //only keep this for a single location change
        this.keepAfterNavChange = false;
      } else {
        //clear the alert message
        this.subject.next();
      }
    });
  }

  success(message: string, keepAfterNavChange = false) {
    this.keepAfterNavChange = keepAfterNavChange;
    this.subject.next({ type: 'success', text: message})
  }

  error(message: string, keepAfterNavChange = false) {
    this.keepAfterNavChange = keepAfterNavChange;
    this.subject.next({ type: 'error', text: message});
  }


  //This function returns an Observable that is used by the alert-message component to subcribe
  //to nofications for whenever a message should be displayed
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
