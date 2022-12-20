import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private counter = 0;

  private loadingSubject = new Subject<number>();
  private loading$ = this.loadingSubject.asObservable();

  constructor() {}

  getLoading() {
    return this.loading$;
  }

  startLoading() {
    this.loadingSubject.next(++this.counter);
  }

  stopLoading() {
    if (this.counter > 0) {
      this.loadingSubject.next(--this.counter);
    }
  }
}
