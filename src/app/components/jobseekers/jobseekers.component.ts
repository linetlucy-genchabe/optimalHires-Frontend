import { Component, OnInit } from '@angular/core';
import { JobseekersService } from 'src/app/services/jobseekers.service';
import { Jobseekers } from 'src/app/models/Jobseeker';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {
  jobseekers!: Jobseekers[];

  constructor(private jobseekersService:JobseekersService) { }

  ngOnInit(): void {
    this.getJobseekers()
  }


  getJobseekers(): void{
    this.jobseekersService.getJobseekers().subscribe
    (jobseekers=>{
      this.jobseekers=jobseekers;
      console.log(jobseekers);
    })
  }


}
