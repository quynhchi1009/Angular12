import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedFoodComponent } from './displayed-food.component';

describe('DisplayedFoodComponent', () => {
  let component: DisplayedFoodComponent;
  let fixture: ComponentFixture<DisplayedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayedFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
