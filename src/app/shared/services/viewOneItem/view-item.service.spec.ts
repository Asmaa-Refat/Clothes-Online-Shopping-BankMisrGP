import { TestBed } from '@angular/core/testing';

import { ViewItemService } from './view-item.service';

describe('ViewItemService', () => {
  let service: ViewItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
