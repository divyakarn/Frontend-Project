import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectridetailspagePage } from './electridetailspage.page';

describe('ElectridetailspagePage', () => {
  let component: ElectridetailspagePage;
  let fixture: ComponentFixture<ElectridetailspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectridetailspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectridetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
