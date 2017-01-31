import { Component } from '@angular/core';

import { CompanyService } from './shared/company.service';
import { Company } from './company';


const COMPANIES: Company[] = [
  {id: 1, name: 'Company1'},
  {id: 2, name: 'Company2'},
  {id: 3, name: 'Company3'},
  {id: 4, name: 'Company4'},
  {id: 5, name: 'Company5'},
  {id: 6, name: 'Company6'}
]

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ul class="companies">
      <li *ngFor="let company of companies"
      [class.selected]="company === selectedCompany"
      (click)="onSelect(company)">
        <span class="badge">{{company.id}}</span>{{company.name}}
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .companies {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .companies li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .companies li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .companies li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .companies .text {
      position: relative;
      top: -3px;
    }
    .companies .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'API CHALLENGE';
  companies = COMPANIES;
  selectedCompany: Company;

  onSelect(company:Company):void {
    this.selectedCompany = company;
  }
}
