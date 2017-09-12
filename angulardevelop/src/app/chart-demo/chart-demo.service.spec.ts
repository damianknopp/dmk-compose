import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ChartDemoService } from './chart-demo.service';

describe('ChartDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ChartDemoService]
    });
  });

  it('should be created', inject([ChartDemoService], (service: ChartDemoService) => {
    expect(service).toBeTruthy();
  }));
});
