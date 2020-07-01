import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnergiasPage } from './energias.page';

describe('EnergiasPage', () => {
  let component: EnergiasPage;
  let fixture: ComponentFixture<EnergiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnergiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
