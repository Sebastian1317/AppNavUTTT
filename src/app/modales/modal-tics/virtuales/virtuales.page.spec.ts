import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirtualesPage } from './virtuales.page';

describe('VirtualesPage', () => {
  let component: VirtualesPage;
  let fixture: ComponentFixture<VirtualesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
