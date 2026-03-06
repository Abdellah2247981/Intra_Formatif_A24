import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { minouGuard } from './minou.guard';

describe('minouGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => minouGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
