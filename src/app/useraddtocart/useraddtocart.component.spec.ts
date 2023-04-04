import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddtocartComponent } from './useraddtocart.component';

describe('UseraddtocartComponent', () => {
  let component: UseraddtocartComponent;
  let fixture: ComponentFixture<UseraddtocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddtocartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
