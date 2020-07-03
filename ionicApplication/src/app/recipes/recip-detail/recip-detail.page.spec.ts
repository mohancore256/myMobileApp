import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipDetailPage } from './recip-detail.page';

describe('RecipDetailPage', () => {
  let component: RecipDetailPage;
  let fixture: ComponentFixture<RecipDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
