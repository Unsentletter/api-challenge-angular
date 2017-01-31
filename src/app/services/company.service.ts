import { Injectable } from '@angular/core';

import { Company } from '../company/company';
import { COMPANIES } from '../mock-companies'

@Injectable()
export class CompanyService {
  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }

  getCompany(id: number): Promise<Company> {
    return this.getCompanies()
    .then(companies => companies.find(company => company.id === id));
  }
}







// import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
//
// @Injectable()
// export class CompanyService {
//   constructor (
//     private http: Http
//   ) {}
//
//   getCompanies() {
//     let headers = new Headers();
//     headers.append("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY");
//
//     let options = new RequestOptions({ headers: headers });
//
//     return this.http.get(`https://api.demo.muulla.com/cms/merchant/all/active/10/1`, options)
//     .map(res => res.json())
//   }
//
// }
