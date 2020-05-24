import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService} from '../api.service';
import {Cases} from '../cases';

import { from } from 'rxjs';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
