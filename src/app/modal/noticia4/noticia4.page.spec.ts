import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Noticia4Page } from './noticia4.page';

describe('Noticia4Page', () => {
  let component: Noticia4Page;
  let fixture: ComponentFixture<Noticia4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Noticia4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
