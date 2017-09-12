import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChartDemoService {
  private readonly path = '/api';

  constructor(private http: Http) { }

  public fetchChartData(len = 6): Observable<number[]> {
    const url = `${this.path}/chartData?len=${len}`;
    return this.http
      .get(url)
      .map((resp) => resp.json().chartData as number[]);
  }

}
