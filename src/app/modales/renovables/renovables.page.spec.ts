import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenovablesPage } from './renovables.page';

describe('RenovablesPage', () => {
  let component: RenovablesPage;
  let fixture: ComponentFixture<RenovablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenovablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
