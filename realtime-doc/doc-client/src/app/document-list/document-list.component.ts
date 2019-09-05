import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentService } from '../document-service.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  $documents: Observable<string[]>;
  currentDocId: string;
  private docSub: Subscription;

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.$documents = this.docService.documents;
    this.docSub = this.docService.currentDocument.subscribe(doc => this.currentDocId = doc.id);
  }

  loadDoc(id: string) {
    this.docService.getDocument(id);
  }

  newDoc() {
    this.docService.newDocument();
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }

}
