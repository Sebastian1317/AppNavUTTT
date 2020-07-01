import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumanoPage } from './humano.page';

describe('HumanoPage', () => {
  let component: HumanoPage;
  let fixture: ComponentFixture<HumanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
