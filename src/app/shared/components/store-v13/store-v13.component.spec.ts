import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreV13Component } from './store-v13.component';

describe('StoreV13Component', () => {
  let component: StoreV13Component;
  let fixture: ComponentFixture<StoreV13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreV13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreV13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
