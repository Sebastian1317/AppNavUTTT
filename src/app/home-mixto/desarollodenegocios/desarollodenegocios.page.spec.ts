import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarollodenegociosPage } from './desarollodenegocios.page';

describe('DesarollodenegociosPage', () => {
  let component: DesarollodenegociosPage;
  let fixture: ComponentFixture<DesarollodenegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarollodenegociosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarollodenegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
