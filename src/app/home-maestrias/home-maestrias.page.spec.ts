import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMaestriasPage } from './home-maestrias.page';

describe('HomeMaestriasPage', () => {
  let component: HomeMaestriasPage;
  let fixture: ComponentFixture<HomeMaestriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMaestriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMaestriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
