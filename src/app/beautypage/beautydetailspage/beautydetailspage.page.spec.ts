import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeautydetailspagePage } from './beautydetailspage.page';

describe('BeautydetailspagePage', () => {
  let component: BeautydetailspagePage;
  let fixture: ComponentFixture<BeautydetailspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautydetailspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeautydetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
