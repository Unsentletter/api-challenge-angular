import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Company } from '../company/company';

@Injectable()
export class CompanyService {
  constructor (
    private http: Http
  ) {}

  getCompanies() {
    let headers = new Headers();
    headers.append("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY");

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`https://api.demo.muulla.com/cms/merchant/all/active/10/1`, options)
    .toPromise()
    .then(response => response.json().data as Company[])
    .catch(this.handleError)
  }

  getCompany(_id: number): Promise<Company> {
      return this.getCompanies()
      .then(companies => companies.find(company => company._id === _id));
    }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
