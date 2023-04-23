import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashGamesStageComponent } from './cash-games-stage.component';

describe('CashGamesStageComponent', () => {
  let component: CashGamesStageComponent;
  let fixture: ComponentFixture<CashGamesStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashGamesStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashGamesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
