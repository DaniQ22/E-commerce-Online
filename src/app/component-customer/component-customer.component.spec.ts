import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCustomerComponent } from './component-customer.component';

describe('ComponentCustomerComponent', () => {
  let component: ComponentCustomerComponent;
  let fixture: ComponentFixture<ComponentCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCustomerComponent]
    });
    fixture = TestBed.createComponent(ComponentCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
