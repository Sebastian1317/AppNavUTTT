import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicsPage } from './tics.page';

describe('TicsPage', () => {
  let component: TicsPage;
  let fixture: ComponentFixture<TicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
