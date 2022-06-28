import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFoodInfoComponent } from './user-view-food-info.component';

describe('UserViewFoodInfoComponent', () => {
  let component: UserViewFoodInfoComponent;
  let fixture: ComponentFixture<UserViewFoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewFoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewFoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
