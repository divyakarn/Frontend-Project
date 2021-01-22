import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooddetailspagePage } from './fooddetailspage.page';

describe('FooddetailspagePage', () => {
  let component: FooddetailspagePage;
  let fixture: ComponentFixture<FooddetailspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddetailspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooddetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
