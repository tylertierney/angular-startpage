import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiserviceService {
  private prefModalShowing: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  togglePrefModalShowing(): void {
    this.prefModalShowing = !this.prefModalShowing;
    this.subject.next(this.prefModalShowing);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
