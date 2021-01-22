import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeautypagePage } from './beautypage.page';

describe('BeautypagePage', () => {
  let component: BeautypagePage;
  let fixture: ComponentFixture<BeautypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeautypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
