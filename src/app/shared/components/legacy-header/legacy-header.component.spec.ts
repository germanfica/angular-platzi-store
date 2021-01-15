import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyHeaderComponent } from './legacy-header.component';

describe('LegacyHeaderComponent', () => {
  let component: LegacyHeaderComponent;
  let fixture: ComponentFixture<LegacyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
