import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent} from './company/company-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompaniesComponent},
  {path: 'detail/:_id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
