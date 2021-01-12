import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreV12Component } from './store-v12.component';

describe('StoreV12Component', () => {
  let component: StoreV12Component;
  let fixture: ComponentFixture<StoreV12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreV12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreV12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
