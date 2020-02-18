import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailAddComponent } from './orders-detail-add.component';

describe('OrdersDetailAddComponent', () => {
  let component: OrdersDetailAddComponent;
  let fixture: ComponentFixture<OrdersDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
