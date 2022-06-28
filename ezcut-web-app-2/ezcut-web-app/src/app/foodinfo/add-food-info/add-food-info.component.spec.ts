import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodInfoComponent } from './add-food-info.component';

describe('AddFoodInfoComponent', () => {
  let component: AddFoodInfoComponent;
  let fixture: ComponentFixture<AddFoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
