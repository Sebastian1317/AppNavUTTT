import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NanotecnologiaPage } from './nanotecnologia.page';

describe('NanotecnologiaPage', () => {
  let component: NanotecnologiaPage;
  let fixture: ComponentFixture<NanotecnologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanotecnologiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NanotecnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
