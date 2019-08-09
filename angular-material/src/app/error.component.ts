import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: 'error.component.html'
})
export class ErrorComponent {
  constructor(
    private dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  public closeDialog() {
    this.dialogRef.close();
  }
}
