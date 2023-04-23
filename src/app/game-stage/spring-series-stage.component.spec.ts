import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSeriesStageComponent } from './spring-series-stage.component';

describe('SpringSeriesStageComponent', () => {
  let component: SpringSeriesStageComponent;
  let fixture: ComponentFixture<SpringSeriesStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringSeriesStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringSeriesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
