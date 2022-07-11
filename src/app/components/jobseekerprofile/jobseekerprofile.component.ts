import { Component, OnInit } from '@angular/core';
import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';
import { JobseekersService } from 'src/app/services/jobseekers.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css'],
  providers: [JobseekersService,JobseekerprofileService],
})



export class JobseekerprofileComponent implements OnInit {

  jobseekerId!:any;

  jobseekerprofile!: JobseekerProfile[];

  constructor(
    private jobseekerprofileService:JobseekerprofileService,
    private jobseeker:JobseekerprofileService,
    private router: ActivatedRoute,
    ) { }

    jobseekerProfileForm= new FormGroup({
      jobseekerId: new FormControl(''),
      fullname: new FormControl(''),
      image:new FormControl(''),
      gender: new FormControl(''),
      resume: new FormControl(''),
      about_me:new FormControl(''),
      phone_number: new FormControl(''),
      email:new FormControl(''),
      location:new FormControl(''),
      educational_qualification:new FormControl(''),
      professional_designation:new FormControl(''),
      experience_years:new FormControl(''),
      employer:new FormControl(''),
      job_category:new FormControl(''),
      salary:new FormControl(''),
      availability:new FormControl(''),
      create_at:new FormControl(''),
    });
  

   message:boolean=false;

  ngOnInit(): void {
    this.getJobseekerProfile()
  }

  getJobseekerProfile(): void{
    this.jobseekerprofileService.getJobseekerProfile().subscribe(jobseekerprofile=>{
      this.jobseekerprofile=jobseekerprofile;
      console.log(jobseekerprofile);
    })
  }

  SaveJobseekerProfileData(){
    // console.log(this.employerProfileForm.value)
    this.jobseeker.saveJobseekerProfileData(this.jobseekerProfileForm.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
      this.jobseekerProfileForm.reset({});
    });
  }

  removeMessage(){
    this.message=false;
  }

}
