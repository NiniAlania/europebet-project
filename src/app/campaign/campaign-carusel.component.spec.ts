import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCaruselComponent } from './campaign-carusel.component';

describe('CampaignCaruselComponent', () => {
  let component: CampaignCaruselComponent;
  let fixture: ComponentFixture<CampaignCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignCaruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
