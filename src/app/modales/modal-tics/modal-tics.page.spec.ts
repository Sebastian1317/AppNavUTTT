import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTicsPage } from './modal-tics.page';

describe('ModalTicsPage', () => {
  let component: ModalTicsPage;
  let fixture: ComponentFixture<ModalTicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
