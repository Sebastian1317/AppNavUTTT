import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantenimientoPage } from './mantenimiento.page';

describe('MantenimientoPage', () => {
  let component: MantenimientoPage;
  let fixture: ComponentFixture<MantenimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
