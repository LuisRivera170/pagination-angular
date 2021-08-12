import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationOrderComponent } from './pagination-order.component';

describe('PaginationOrderComponent', () => {
  let component: PaginationOrderComponent;
  let fixture: ComponentFixture<PaginationOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
