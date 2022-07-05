import { Component, OnInit } from '@angular/core';
import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';

@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css']
})
export class JobseekerprofileComponent implements OnInit {

  jobseekerprofile!: JobseekerProfile[];

  constructor(private jobseekerprofileService:JobseekerprofileService) { }

  ngOnInit(): void {
    this.getJobseekerProfile()
  }

  getJobseekerProfile(): void{
    this.jobseekerprofileService.getJobseekerProfile().subscribe
    (jobseekerprofile=>{
      this.jobseekerprofile=jobseekerprofile;
      console.log(jobseekerprofile);
    })
  }

}
