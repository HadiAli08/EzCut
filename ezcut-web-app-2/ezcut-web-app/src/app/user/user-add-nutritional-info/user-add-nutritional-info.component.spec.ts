import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddNutritionalInfoComponent } from './user-add-nutritional-info.component';

describe('UserAddNutritionalInfoComponent', () => {
  let component: UserAddNutritionalInfoComponent;
  let fixture: ComponentFixture<UserAddNutritionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddNutritionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddNutritionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
