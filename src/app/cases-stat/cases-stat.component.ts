import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.scss'],
})
export class CasesStatComponent implements OnInit {
<<<<<<< HEAD
  stats: Statistic[] = [];
  label = 'Positive';
  isLoadingResults = true;
  barChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], backgroundColor: [], label: this.label },
  ];
  getStatistic(status: string) {
    this.barChartData = [{ data: [], backgroundColor: [], label: this.label }];
    this.barChartLabels = [];
    this.api.getStatistic(status).subscribe(
      (res: any) => {
        this.stats = res;
        const chartdata: number[] = [];
        const chartcolor: string[] = [];
        this.stats.forEach((stat) => {
          this.barChartLabels.push(stat._id.date);
          chartdata.push(stat.count);
          if (this.label === 'Positive') {
            chartcolor.push('rgba(255,165,0,0.5)');
          } else if (this.label === 'Dead') {
            chartcolor.push('rgba(255,0,0,0.5)');
          } else {
            chartcolor.push('rgba(0,255,0,0.5)');
          }
        });
        this.barChartData = [
          { data: chartdata, backgroundColor: chartcolor, label: this.label },
        ];
        this.isLoadingResults = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  changeStatus() {
    this.isLoadingResults = true;
    this.getStatistic(this.label);
  }

  constructor(private api: ApiService) {}
=======

  constructor() { }
>>>>>>> parent of 5221000... added imports and variable to cases-stat component

  ngOnInit(): void {
    this.getStatistic(this.label);
  }
}
