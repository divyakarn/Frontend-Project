import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectripagePage } from './electripage.page';

describe('ElectripagePage', () => {
  let component: ElectripagePage;
  let fixture: ComponentFixture<ElectripagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectripagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectripagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
