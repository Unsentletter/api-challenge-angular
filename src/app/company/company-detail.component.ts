import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Company } from '../company/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html'
})

export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.companyService.getCompany(+params['id']))
    .subscribe(company => this.company = company);
  }

  goBack(): void {
    this.location.back();
  }
}
