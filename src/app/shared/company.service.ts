import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getCompanies() {
    return this.http.get(`http://api.demo.muulla.com/cms/merchant/all/active/10/1`)
    .map((res:Response) => res.json());
  }
}
