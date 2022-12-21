import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { UnsavedChangesGuard } from './core/services/unsaved-changes-guard.service';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'create',
        component: BookCreateComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      {
        path: ':id',
        component: BookDetailComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
