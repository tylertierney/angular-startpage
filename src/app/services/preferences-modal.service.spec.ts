import { TestBed } from '@angular/core/testing';

import { PreferencesModalService } from './preferences-modal.service';

describe('PreferencesModalService', () => {
  let service: PreferencesModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
