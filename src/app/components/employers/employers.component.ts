import { Component, OnInit } from '@angular/core';
import { Employers } from 'src/app/models/Employers';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  employers! : Employers[]

  constructor(private employersService:EmployersService) { }

  ngOnInit(): void {
    this.getEmployers()
  }

  getEmployers(): void{
    this.employersService.getEmployers().subscribe
    (employers=>{
      this.employers=employers;
      console.log(employers);
    })
  }

}
