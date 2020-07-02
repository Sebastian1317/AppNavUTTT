import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarrolloACSPage } from './desarrollo-acs.page';

describe('DesarrolloACSPage', () => {
  let component: DesarrolloACSPage;
  let fixture: ComponentFixture<DesarrolloACSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloACSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarrolloACSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
