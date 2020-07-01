import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContaduriaPage } from './contaduria.page';

describe('ContaduriaPage', () => {
  let component: ContaduriaPage;
  let fixture: ComponentFixture<ContaduriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaduriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContaduriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
