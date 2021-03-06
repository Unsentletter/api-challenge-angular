import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Company } from '../company/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.companyService.getCompany(+params['_id']))
    .subscribe(company => this.company = company);
  }

  goBack() {
    this.location.back();
  }
}
