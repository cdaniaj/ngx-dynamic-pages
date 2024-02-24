import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicScreenComponent } from './ngx-dynamic-screen.component';

describe('NgxDynamicScreenComponent', () => {
  let component: NgxDynamicScreenComponent;
  let fixture: ComponentFixture<NgxDynamicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDynamicScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
