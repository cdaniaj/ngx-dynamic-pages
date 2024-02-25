import { TestBed } from '@angular/core/testing';

import { NgxDynamicPagesService } from './ngx-dynamic-pages.service';

describe('NgxDynamicPagesService', () => {
  let service: NgxDynamicPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
