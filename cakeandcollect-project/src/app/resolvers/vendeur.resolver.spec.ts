import { TestBed } from '@angular/core/testing';

import { VendeurResolver } from './vendeur.resolver';

describe('VendeurResolver', () => {
  let resolver: VendeurResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VendeurResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
