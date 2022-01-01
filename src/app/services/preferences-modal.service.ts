import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreferencesModalService {
  private prefModalIsOpen: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  togglePrefModalShowing(): void {
    this.prefModalIsOpen = !this.prefModalIsOpen;
    this.subject.next(this.prefModalIsOpen);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
