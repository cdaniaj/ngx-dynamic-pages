import { TestBed } from '@angular/core/testing';

import { NgxDynamicScreenService } from './ngx-dynamic-screen.service';

describe('NgxDynamicScreenService', () => {
  let service: NgxDynamicScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
