import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';

import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';

import { JobtypeComponent } from './components/jobtype/jobtype.component';

import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    EmployersComponent,
    JobseekersComponent,

    JobseekerprofileComponent,
    EmployerprofileComponent,

    JobtypeComponent,
 
    CategoryComponent,
    NavbarComponent,
    LoginOptionsComponent

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
