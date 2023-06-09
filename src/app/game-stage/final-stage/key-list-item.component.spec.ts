import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyListItemComponent } from './key-list-item.component';

describe('KeyListItemComponent', () => {
  let component: KeyListItemComponent;
  let fixture: ComponentFixture<KeyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
