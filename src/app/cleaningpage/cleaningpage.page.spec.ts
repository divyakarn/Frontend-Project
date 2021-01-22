import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CleaningpagePage } from './cleaningpage.page';

describe('CleaningpagePage', () => {
  let component: CleaningpagePage;
  let fixture: ComponentFixture<CleaningpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
