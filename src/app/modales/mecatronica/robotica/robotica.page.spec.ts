import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoboticaPage } from './robotica.page';

describe('RoboticaPage', () => {
  let component: RoboticaPage;
  let fixture: ComponentFixture<RoboticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
