import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutomatizacionPage } from './automatizacion.page';

describe('AutomatizacionPage', () => {
  let component: AutomatizacionPage;
  let fixture: ComponentFixture<AutomatizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutomatizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
