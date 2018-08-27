import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCardComponent } from './pop-card.component';

describe('PopCardComponent', () => {
  let component: PopCardComponent;
  let fixture: ComponentFixture<PopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
