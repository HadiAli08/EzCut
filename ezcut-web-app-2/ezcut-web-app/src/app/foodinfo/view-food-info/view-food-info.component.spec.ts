import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodInfoComponent } from './view-food-info.component';

describe('ViewFoodInfoComponent', () => {
  let component: ViewFoodInfoComponent;
  let fixture: ComponentFixture<ViewFoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
