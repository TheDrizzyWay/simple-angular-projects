import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Document } from '../models/document';
import { DocumentService } from '../document-service.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  document: Document;
  docSub: Subscription;

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.docSub = this.docService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);
  }

  editDoc() {
    this.docService.editDocument(this.document);
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }

}
