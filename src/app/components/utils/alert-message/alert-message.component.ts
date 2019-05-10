import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  message: any;

  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit() {
    this.subscription = this.alertMessageService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
