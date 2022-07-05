import { Component, OnInit } from '@angular/core';
import { EmployerProfile } from 'src/app/models/EmployerProfile';
import { EmployerprofileService } from 'src/app/services/employerprofile.service';

@Component({
  selector: 'app-employerprofile',
  templateUrl: './employerprofile.component.html',
  styleUrls: ['./employerprofile.component.css']
})
export class EmployerprofileComponent implements OnInit {
  employerprofile! : EmployerProfile[];

  constructor(private employerprofileService:EmployerprofileService) { }

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

}
