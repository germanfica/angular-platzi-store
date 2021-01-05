import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreV14Component } from './store-v14.component';

describe('StoreV14Component', () => {
  let component: StoreV14Component;
  let fixture: ComponentFixture<StoreV14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreV14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreV14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
