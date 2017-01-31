import { Component } from '@angular/core';

import { CompanyService } from './shared/company.service';

@Component({
  selector: 'app-companies',
  template: `
    <div>
      {{ company | json}}
    </div>
  `
// <button (click)="loadCompany()">Load Company</button>
})
export class AppComponent {
  constructor(private companyService: CompanyService) {}
  company = {};

  loadCompany({
    console.log("clicked")
    this.companyService.getCompanies().subscribe(data => this.company = data.data.map(post => post));
    console.log(company);
  })();
}
