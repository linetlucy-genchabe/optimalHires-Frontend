import { Component, OnInit } from '@angular/core';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';
import { JobseekersService } from 'src/app/services/jobseekers.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-jobseekerprofile',
  templateUrl: './update-jobseekerprofile.component.html',
  styleUrls: ['./update-jobseekerprofile.component.css'],
  providers: [JobseekersService,JobseekerprofileService],
})

  
export class UpdateJobseekerprofileComponent implements OnInit {
  jobseekerProfileData: any;

  jobseekerId!:any;
  
  

  jobseekerprofile!: JobseekerProfile[];

  constructor(
    private jobseekerprofileService:JobseekerprofileService,
    private jobseeker:JobseekerprofileService,
    private router: ActivatedRoute,
    ) { }

    updateJobseekerProfileForm= new FormGroup({
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
    this.getJobseekerProfile();
    this.UpdateJobseekerProfileData();
    this.removeMessage();
    // console.log(this.router.snapshot.params.id);
    this.jobseeker.getJobseekerProfileById(this.router.snapshot.paramMap.get('jobseekerId')).subscribe((result:any)=>{
      // console.log(result);
      this.updateJobseekerProfileForm= new FormGroup({
        jobseekerId: new FormControl(result['jobseekerId']),
        fullname: new FormControl(result['fullname']),
        image:new FormControl(result['image']),
        gender: new FormControl(result['gender']),
        resume: new FormControl(result['resume']),
        about_me:new FormControl(result['about_me']),
        phone_number: new FormControl(result['phone_number']),
        email:new FormControl(result['email']),
        location:new FormControl(result['location']),
        educational_qualification:new FormControl(result['educational_qualification']),
        professional_designation:new FormControl(result['professional_designation']),
        experience_years:new FormControl(result['experience_years']),
        employer:new FormControl(result['employer']),
        job_category:new FormControl(result['job_category']),
        salary:new FormControl(result['salary']),
        availability:new FormControl(result['availability']),
        create_at:new FormControl(result['create_at']),
      });
    });
  }

  getJobseekerProfile(): void{
    this.jobseekerprofileService.getJobseekerProfile().subscribe(jobseekerprofile=>{
      this.jobseekerprofile=jobseekerprofile;
      console.log(jobseekerprofile);
      
    })
  }

  UpdateJobseekerProfileData(){
    this.jobseeker.updateJobseekerProfileData(this.router.snapshot.paramMap.get('jobseekerId'), this.updateJobseekerProfileForm.value).subscribe((result)=>{
      console.log(result);

      this.message=true;
    });
    
  }
  
  removeMessage(){
    this.message=false;
  }

  deleteJobseekerProfile(id: any){
    // console.log(jobseekerId);
    this.jobseeker.deleteJobseekerProfile(this.jobseeker).subscribe((result)=> {
      // console.log (result);
      this.ngOnInit();
    });
  }

}




  // constructor(
  //   private JobseekersService:JobseekersService,
  //   private jobseeker:JobseekerprofileService,
  //   private router: ActivatedRoute) { }


  //   message: boolean=false;
  //   ngOnInit(){
  //     this.jobseekerProfileData = {
  //       jobseeker:'',
  //       about_me:'',
  //       phone_number:'',
  //       email:'',
  //       location:'',
  //       educational_qualification:'',
  //       professional_designation:'',
  //       experience_years:'',
  //       employer:'',
  //       job_category:'',
  //       salary:'',
  //       create_at:'',
  //     };
      
    //   this.jobseeker = this.router.snapshot.paramMap.get('id')
    //   // console.log( "aaff"+this.router.snapshot.paramMap.get('id') );
    //   this.jobseeker.getJobseeker( this.jobseeker ).subscribe( ( result: any ) => {
    //     // console.log( result );
    //   } );
    // }
    // updateJobseekerProfile() {
    //   this.jobseeker.updateJobseekerProfile(this.jobseekerProfileData).subscribe( ( result ) => {
    //     //console.log( result );
    //     this.message=true;
    //   } )
      
    // }
    // removeMessage() {
    //   this.message=false;
    // }

