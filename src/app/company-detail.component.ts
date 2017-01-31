import { Component } from '@angular/core';

import { Company } from './company';

@Component({
  selector: 'app-company-detail',
  template: `
    <div *ngIf="selectedCompany">
      <h2>{{selectedCompany.name}} details</h2>
      <div><label>id: </label>{{selectedCompany.id}}</div>
      <div><label>name: </label>{{selectedCompany.name}}</div>
    </div>
  `
})

export class CompanyDetailComponent {
  company: Company;
}
