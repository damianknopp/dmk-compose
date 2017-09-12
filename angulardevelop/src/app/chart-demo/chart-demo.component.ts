import { Component, OnInit, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { LinearTickOptions, Chart } from 'chart.js';
import { ChartDemoService } from './chart-demo.service';
import { parentFadeIn } from '../animations/slide-in-out.animation';

@Component({
    selector: 'app-chart-demo',
    templateUrl: './chart-demo.component.html',
    styleUrls: ['./chart-demo.component.css'],
    animations: [parentFadeIn]
})
export class ChartDemoComponent implements OnInit, AfterViewInit {

    @ViewChildren('chart')
    charts: QueryList<ElementRef>;
    chart: ElementRef;
    chartData: number[];

    constructor(private chartDemoService: ChartDemoService) {
        console.log('ctor');
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        const sub = this.chartDemoService
            .fetchChartData()
            .subscribe(
            (resp) => {
                this.chartData = resp;
            },
            (err) => console.log(err),
            () => sub.unsubscribe()
            );

        // watch for changes or chart will be undefined
        const sub2 = this.charts.changes
            .subscribe((components) => {
                this.chart = components.first;
                this.buildChart();
            },
            (err) => console.log(err),
            () => sub2.unsubscribe());
    }

    buildChart() {
        if (!this.chart) {
            console.warn('chart is not defined!');
            return;
        }

        console.log(this.chart);
        const ctx = (<HTMLCanvasElement>this.chart.nativeElement).getContext('2d');
        console.log(ctx);
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: this.chartData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        } as LinearTickOptions
                    }]
                }
            }
        });
    }

}
