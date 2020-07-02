import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarollonamPage } from './desarollonam.page';

describe('DesarollonamPage', () => {
  let component: DesarollonamPage;
  let fixture: ComponentFixture<DesarollonamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarollonamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarollonamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
