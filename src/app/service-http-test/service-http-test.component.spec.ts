import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHttpTestComponent } from './service-http-test.component';

describe('ServiceHttpTestComponent', () => {
  let component: ServiceHttpTestComponent;
  let fixture: ComponentFixture<ServiceHttpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHttpTestComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHttpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
