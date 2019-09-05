import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from './models/document';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument: Observable<Document>;
  documents: Observable<string[]>;

  constructor(private socket: Socket) {
    this.currentDocument = this.socket.fromEvent<Document>('document');
    this.documents = this.socket.fromEvent<string[]>('documents');
  }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId(): string {
    const text = Math.random().toString(36).substring(6);
    return text;
  }
}
