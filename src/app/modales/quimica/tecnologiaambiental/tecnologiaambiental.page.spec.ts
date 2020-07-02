import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnologiaambientalPage } from './tecnologiaambiental.page';

describe('TecnologiaambientalPage', () => {
  let component: TecnologiaambientalPage;
  let fixture: ComponentFixture<TecnologiaambientalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaambientalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnologiaambientalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
