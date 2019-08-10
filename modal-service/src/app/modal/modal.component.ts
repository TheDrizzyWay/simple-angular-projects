import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public modalOpen: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getModal().subscribe((isOpen) => {
      this.modalOpen = isOpen as boolean;
    });
  }

  closeModal() {
    this.modalService.close();
  }

}
