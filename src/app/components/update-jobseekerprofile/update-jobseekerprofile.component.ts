import { Component, OnInit } from '@angular/core';
import { JobseekerprofileService } from 'src/app/services/jobseekerprofile.service';
import { JobseekersService } from 'src/app/services/jobseekers.service';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { JobseekerProfile } from 'src/app/models/JobseekerProfile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-jobseekerprofile',
  templateUrl: './update-jobseekerprofile.component.html',
  styleUrls: ['./update-jobseekerprofile.component.css'],
  providers: [JobseekersService,JobseekerprofileService],
})

  // jobseekerId: any;
  // jobseekerProfileData: any;
  // image:any;
  
export class UpdateJobseekerprofileComponent implements OnInit {
  jobseekerProfileData: any;

  constructor(
    private JobseekersService:JobseekersService,
    private jobseeker:JobseekerprofileService,
    private router: ActivatedRoute) { }


    message: boolean=false;
    ngOnInit(){
      this.jobseekerProfileData = {
        jobseeker:'',
        about_me:'',
        phone_number:'',
        email:'',
        location:'',
        educational_qualification:'',
        professional_designation:'',
        experience_years:'',
        employer:'',
        job_category:'',
        salary:'',
        create_at:'',
      };
      
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
      
    }
    removeMessage() {
      this.message=false;
    }
}
