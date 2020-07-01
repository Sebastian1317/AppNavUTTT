import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarollodeNegociosPage } from './desarollode-negocios.page';

describe('DesarollodeNegociosPage', () => {
  let component: DesarollodeNegociosPage;
  let fixture: ComponentFixture<DesarollodeNegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarollodeNegociosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarollodeNegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
