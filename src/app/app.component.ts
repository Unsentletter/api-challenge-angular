import { Component } from '@angular/core';

import { CompanyService } from './shared/company.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="loadCompany()">Load Company</button>
      {{ company | json }}
      </div>
  `

})
export class AppComponent {
  constructor(private companyService: CompanyService) {}
  company = {};

  loadCompany() {
    console.log("clicked")
    this.companyService.getCompanies().subscribe(data => this.company = data);
  }
}
