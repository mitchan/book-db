import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookDetailComponent, BookFormComponent, BookCreateComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
