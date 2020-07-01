import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgriculturaPage } from './agricultura.page';

describe('AgriculturaPage', () => {
  let component: AgriculturaPage;
  let fixture: ComponentFixture<AgriculturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgriculturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
