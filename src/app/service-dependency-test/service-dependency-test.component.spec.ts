import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDependencyTestComponent } from './service-dependency-test.component';

describe('ServiceDependencyTestComponent', () => {
  let component: ServiceDependencyTestComponent;
  let fixture: ComponentFixture<ServiceDependencyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDependencyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDependencyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
