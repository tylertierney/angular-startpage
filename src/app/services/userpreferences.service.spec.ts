import { TestBed } from '@angular/core/testing';

import { UserpreferencesService } from './userpreferences.service';

describe('UserpreferencesService', () => {
  let service: UserpreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
