import { ComponentFixture, TestBed } from '@angular/core/testing'; // ✅ これを追加！
import { ThanksComponent } from './thanks.component';

describe('ThanksComponent', () => {
  let component: ThanksComponent;
  let fixture: ComponentFixture<ThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
