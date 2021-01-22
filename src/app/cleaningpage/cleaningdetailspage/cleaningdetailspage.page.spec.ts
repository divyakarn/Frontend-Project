import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CleaningdetailspagePage } from './cleaningdetailspage.page';

describe('CleaningdetailspagePage', () => {
  let component: CleaningdetailspagePage;
  let fixture: ComponentFixture<CleaningdetailspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningdetailspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningdetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
