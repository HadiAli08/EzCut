import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewNutritionalInfoComponent } from './user-view-nutritional-info.component';

describe('UserViewNutritionalInfoComponent', () => {
  let component: UserViewNutritionalInfoComponent;
  let fixture: ComponentFixture<UserViewNutritionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewNutritionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewNutritionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
