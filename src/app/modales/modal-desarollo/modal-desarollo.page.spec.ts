import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDesarolloPage } from './modal-desarollo.page';

describe('ModalDesarolloPage', () => {
  let component: ModalDesarolloPage;
  let fixture: ComponentFixture<ModalDesarolloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDesarolloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDesarolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
