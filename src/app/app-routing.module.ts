import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';
import { JobtypeComponent } from './components/jobtype/jobtype.component';

import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'employer', component: EmployersComponent },
  {path: 'jobseeker', component: JobseekersComponent },
  {path: 'category', component: CategoryComponent },
  {path: 'navbar', component: NavbarComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
