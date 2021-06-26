import { TestBed } from '@angular/core/testing';

import { SubscriptionApiService } from './subscription-api.service';

describe('StudentsApiService', () => {
  let service: SubscriptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
