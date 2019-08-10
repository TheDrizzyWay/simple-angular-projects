import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  @Input() modalId = 'modal-dialog';

  constructor() { }

  ngOnInit() {
  }

}
