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
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    EmployersComponent,
    JobseekersComponent,

    JobseekerprofileComponent,
    EmployerprofileComponent,

    
 
    CategoryComponent,
    NavbarComponent,
    LoginOptionsComponent,
    ReviewsComponent,
    AboutComponent,
    ApplicantComponent,
    EmployerComponent,
    FooterComponent,
    EmployerDashboardComponent,
    JobseekerDashboardComponent,
  

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
