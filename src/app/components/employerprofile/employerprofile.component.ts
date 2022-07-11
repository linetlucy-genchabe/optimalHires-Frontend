import { Component, OnInit } from '@angular/core';
import { EmployerProfile } from 'src/app/models/EmployerProfile';
import { EmployerprofileService } from 'src/app/services/employerprofile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employerprofile',
  templateUrl: './employerprofile.component.html',
  styleUrls: ['./employerprofile.component.css']
})
export class EmployerprofileComponent implements OnInit {
  employerprofile! : EmployerProfile[];

  constructor(
    private employerprofileService:EmployerprofileService,
    private employer:EmployerprofileService
    ) { }
  
  employerProfileForm= new FormGroup({
    employerId: new FormControl(''),
    name: new FormControl(''),
    contact:new FormControl(''),
    image: new FormControl(''),
    description:new FormControl(''),
    current_opportunities: new FormControl(''),
    employee_benefits:new FormControl(''),
  });

  ngOnInit(): void {
    this.getEmployerProfile()
  }

 

  getEmployerProfile(): void{
    this.employerprofileService.getEmployerProfile().subscribe
    (employerprofile=>{
      this.employerprofile=employerprofile;
      console.log(employerprofile);
    })
  }

  saveEmployerProfileData(){
    // console.log(this.employerProfileForm.value)
    this.employer.saveEmployerData(this.employerProfileForm.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
