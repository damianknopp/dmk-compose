import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TransitionComponent } from './transition.component';

describe('TransitionComponent', () => {
  let component: TransitionComponent;
  let fixture: ComponentFixture<TransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransitionComponent],
      imports: [NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
