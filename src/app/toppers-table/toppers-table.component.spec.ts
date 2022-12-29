import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppersTableComponent } from './toppers-table.component';

describe('ToppersTableComponent', () => {
  let component: ToppersTableComponent;
  let fixture: ComponentFixture<ToppersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
