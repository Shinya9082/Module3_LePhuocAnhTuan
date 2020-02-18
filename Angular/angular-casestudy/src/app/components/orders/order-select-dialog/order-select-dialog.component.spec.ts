import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectDialogComponent } from './order-select-dialog.component';

describe('OrderSelectDialogComponent', () => {
  let component: OrderSelectDialogComponent;
  let fixture: ComponentFixture<OrderSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
