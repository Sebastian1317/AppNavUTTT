import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMixtoPage } from './home-mixto.page';

describe('HomeMixtoPage', () => {
  let component: HomeMixtoPage;
  let fixture: ComponentFixture<HomeMixtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMixtoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMixtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
