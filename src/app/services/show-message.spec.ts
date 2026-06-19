import { TestBed } from '@angular/core/testing';

import { ShowMessageService } from '../services/show-message-service';

describe('ShowMessage', () => {
  let service: ShowMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
