import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailListComponent } from './orders-detail-list.component';

describe('OrdersDetailListComponent', () => {
  let component: OrdersDetailListComponent;
  let fixture: ComponentFixture<OrdersDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
