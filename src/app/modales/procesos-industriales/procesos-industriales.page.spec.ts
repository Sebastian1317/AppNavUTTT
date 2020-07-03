import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProcesosIndustrialesPage } from './procesos-industriales.page';

describe('ModalProcesosIndustrialesPage', () => {
  let component: ModalProcesosIndustrialesPage;
  let fixture: ComponentFixture<ModalProcesosIndustrialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProcesosIndustrialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProcesosIndustrialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
