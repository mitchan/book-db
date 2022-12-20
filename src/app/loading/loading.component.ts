import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  count = 0;

  private sub?: Subscription;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.sub = this.loadingService.getLoading().subscribe((value) => {
      this.count = value;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
