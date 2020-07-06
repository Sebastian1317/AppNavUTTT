import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConstruccionymontPage } from './construccionymont.page';

describe('ConstruccionymontPage', () => {
  let component: ConstruccionymontPage;
  let fixture: ComponentFixture<ConstruccionymontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstruccionymontPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstruccionymontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
