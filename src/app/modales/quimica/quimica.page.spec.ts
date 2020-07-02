import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalQuimicaPage } from './quimica.page';

describe('QuimicaPage', () => {
  let component: ModalQuimicaPage;
  let fixture: ComponentFixture<ModalQuimicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQuimicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalQuimicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
