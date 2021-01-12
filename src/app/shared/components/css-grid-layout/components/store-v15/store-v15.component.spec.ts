import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreV15Component } from './store-v15.component';

describe('StoreV15Component', () => {
  let component: StoreV15Component;
  let fixture: ComponentFixture<StoreV15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreV15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreV15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
