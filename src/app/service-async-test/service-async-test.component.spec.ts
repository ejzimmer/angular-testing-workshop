import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAsyncTestComponent } from './service-async-test.component';

describe('ServiceAsyncTestComponent', () => {
  let component: ServiceAsyncTestComponent;
  let fixture: ComponentFixture<ServiceAsyncTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAsyncTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAsyncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
