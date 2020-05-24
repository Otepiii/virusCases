import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiService } from '../api.service';
import { Statistic } from '../statistic';

@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.scss']
})
export class CasesStatComponent implements OnInit {
  stats:Statistic[] = [];
  label = 'Positive';
  isLoadingResults = true;
  barChartOptions = {
    responsive: true,
  };
  barChartLabels: label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [{data: [], backgroundColor: [], label: this.label}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
