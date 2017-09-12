import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ChartDemoComponent } from './chart-demo.component';
import { ChartDemoService } from './chart-demo.service';

describe('ChartDemoComponent', () => {
  let component: ChartDemoComponent;
  let fixture: ComponentFixture<ChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartDemoComponent],
      imports: [HttpModule, NoopAnimationsModule],
      providers: [
        ChartDemoService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
