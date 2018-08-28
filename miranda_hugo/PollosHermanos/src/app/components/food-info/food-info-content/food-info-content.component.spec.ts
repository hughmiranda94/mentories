import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInfoContentComponent } from './food-info-content.component';

describe('FoodInfoContentComponent', () => {
  let component: FoodInfoContentComponent;
  let fixture: ComponentFixture<FoodInfoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInfoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
