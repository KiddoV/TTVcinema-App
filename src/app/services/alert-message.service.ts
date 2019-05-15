import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  openSnackBarSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
}
