import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuimicaPage } from './quimica.page';

describe('QuimicaPage', () => {
  let component: QuimicaPage;
  let fixture: ComponentFixture<QuimicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuimicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
