import { TestBed } from '@angular/core/testing';

import { JwtinterceptService } from './jwtintercept.service';

describe('JwtinterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtinterceptService = TestBed.get(JwtinterceptService);
    expect(service).toBeTruthy();
  });
});
