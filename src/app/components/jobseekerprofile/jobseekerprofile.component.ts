import { Component, OnInit } from '@angular/core';
import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';
import { JobseekersService } from 'src/app/services/jobseekers.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { filter } from 'rxjs/operators';

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
    private fb: FormBuilder,
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


  form = this.fb.group({
    "jobseekerId": new FormControl('', Validators.required),
    "fullname": new FormControl('', Validators.required),
    "image":new FormControl('', Validators.required),
    "gender": new FormControl('', Validators.required),
    "resume": new FormControl('', Validators.required),
    "about_me":new FormControl('', Validators.required),
    "phone_number": new FormControl('', Validators.required),
    "email":new FormControl('', Validators.required),
    "location":new FormControl('', Validators.required),
    "educational_qualification":new FormControl('', Validators.required),
    "professional_designation":new FormControl('', Validators.required),
    "experience_years":new FormControl('', Validators.required),
    "employer":new FormControl('', Validators.required),
    "job_category":new FormControl('', Validators.required),
    "salary":new FormControl('', Validators.required),
    "availability":new FormControl('', Validators.required),
    "create_at":new FormControl('', Validators.required),
  });


  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);

  }


  fullUpdate() {
    this.form.setValue({
      fullname: null, 
      about_me: null,
      jobseekerId: null,
      image: null,
      gender: null,
      resume: null,
      phone_number: null,
      email: null,
      location: null,
      educational_qualification: null,
      professional_designation: null,
      experience_years: null,
      employer: null,
      job_category: null,
      salary: null,
      availability: null,
      create_at: null
    });
  }

  // this.form.valueChanges
  //   .pipe(
  //       map((value: { fullname: string; }) => {
  //           value.fullname = value.fullname.toUpperCase();
  //           return value;
  //       }),
  //       filter((value: any) => this.form.valid)
  //   )
  //   .subscribe((value: any) => {
  //          console.log("Reactive Form valid value: vm = ",
  //                      JSON.stringify(value));
  //       });
      

  
  partialUpdate() {
    this.form.patchValue({fullname: 'null'});
  }  

  reset() {
    this.form.reset();
  }


}
