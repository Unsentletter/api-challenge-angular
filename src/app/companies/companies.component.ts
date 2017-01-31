import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from '../services/company.service';
import { Company } from '../company/company';


@Component({
  selector: 'app-companies',
  templateUrl: 'companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: Company[];
  selectedCompany: Company;

  constructor(
    private router: Router,
    private companyService: CompanyService) {}

  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit():void {
    this.getCompanies();
  }
  // 
  // onSelect(company:Company):void {
  //   this.selectedCompany = company;
  // }

  gotoDetail(company:Company): void {
    this.selectedCompany = company;
    this.router.navigate(['/detail', this.selectedCompany.id]);
  }
}
