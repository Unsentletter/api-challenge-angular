import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './company-detail.component';
import { CompaniesComponent } from './companies.component';
import { CompanyService } from './shared/company.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/companies', pathMatch: 'full'},
      {path: 'companies', component: CompaniesComponent},
      {path: 'detail/:id', component: CompanyDetailComponent}
    ])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
