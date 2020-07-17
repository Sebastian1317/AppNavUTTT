import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedesPage } from './redes.page';

describe('RedesPage', () => {
  let component: RedesPage;
  let fixture: ComponentFixture<RedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
