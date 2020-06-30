import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesosIndustrialesPage } from './procesos-industriales.page';

describe('ProcesosIndustrialesPage', () => {
  let component: ProcesosIndustrialesPage;
  let fixture: ComponentFixture<ProcesosIndustrialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosIndustrialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesosIndustrialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
