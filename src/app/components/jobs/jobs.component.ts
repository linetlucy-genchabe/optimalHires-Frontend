import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/models/Jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs!: Jobs[];
  
 

  constructor(private jobsservice:JobsService) { }

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs():void{
    this.jobsservice.getJobs().subscribe
    (jobs=>{
      this.jobs=jobs;
      console.log(jobs);
    })
  }

}
