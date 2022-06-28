import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddFoodInfoComponent } from './user-add-food-info.component';

describe('UserAddFoodInfoComponent', () => {
  let component: UserAddFoodInfoComponent;
  let fixture: ComponentFixture<UserAddFoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddFoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddFoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
