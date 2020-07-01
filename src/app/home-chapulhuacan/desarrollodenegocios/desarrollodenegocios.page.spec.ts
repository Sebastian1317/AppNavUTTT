import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarrollodenegociosPage } from './desarrollodenegocios.page';

describe('DesarrollodenegociosPage', () => {
  let component: DesarrollodenegociosPage;
  let fixture: ComponentFixture<DesarrollodenegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrollodenegociosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarrollodenegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
