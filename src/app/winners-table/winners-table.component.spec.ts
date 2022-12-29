import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersTableComponent } from './winners-table.component';

describe('WinnersTableComponent', () => {
  let component: WinnersTableComponent;
  let fixture: ComponentFixture<WinnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
