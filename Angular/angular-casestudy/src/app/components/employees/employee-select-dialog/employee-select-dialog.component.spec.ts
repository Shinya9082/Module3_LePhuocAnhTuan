import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelectDialogComponent } from './employee-select-dialog.component';

describe('EmployeeSelectDialogComponent', () => {
  let component: EmployeeSelectDialogComponent;
  let fixture: ComponentFixture<EmployeeSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
