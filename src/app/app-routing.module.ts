import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
import { UpdateJobseekerprofileComponent } from './components/update-jobseekerprofile/update-jobseekerprofile.component';


const routes: Routes = [
  {path: 'jobseekerprofile/:id', component: JobseekerprofileComponent},
  {path: 'updatejobseekerprofile/:id', component: UpdateJobseekerprofileComponent},

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
