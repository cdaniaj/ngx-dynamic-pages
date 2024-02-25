import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicPagesComponent } from './ngx-dynamic-pages.component';

describe('NgxDynamicPagesComponent', () => {
  let component: NgxDynamicPagesComponent;
  let fixture: ComponentFixture<NgxDynamicPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDynamicPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
