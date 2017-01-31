import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  constructor (
    private http: Http
  ) {}

  getCompanies() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY')
    let options = new RequestOptions({headers: headers});
    return this.http.get(`http://api.demo.muulla.com/cms/merchant/all/active/10/1`, options)
    .map((res:Response) => res.json());
  }

}
