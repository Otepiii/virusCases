import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService} from '../api.service';
import {Cases} from '../cases';

import { from } from 'rxjs';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  cases: Cases = {_id: '', name: '', gender: '', age: null, address: '', city: '', status: '', updated: null};
  isLoadingResults = true;
  getCasesDetails(id: string) {
    this.api.getCasesById(id)
    .subscribe((data: any) => {
      this.cases = data;
      console.log(this.cases);
      this.isLoadingResults = false;
    });
  }

  ngOnInit(): void {
  }

}
