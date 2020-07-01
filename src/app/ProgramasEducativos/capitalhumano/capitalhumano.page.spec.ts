import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapitalhumanoPage } from './capitalhumano.page';

describe('CapitalhumanoPage', () => {
  let component: CapitalhumanoPage;
  let fixture: ComponentFixture<CapitalhumanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalhumanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalhumanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
