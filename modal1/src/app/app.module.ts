import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
