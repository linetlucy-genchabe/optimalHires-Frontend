import { Component, OnInit } from '@angular/core';
import { JobtypeService } from 'src/app/services/jobtype.service';
import { Jobtypes } from 'src/app/models/Jobtype';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.css']
})
export class JobtypeComponent implements OnInit {
  jobtypes!: Jobtypes[];

  constructor(private jobtypeService:JobtypeService) { }

  ngOnInit(): void {
    this.getJobtypes()
  }


  getJobtypes(): void{
    this.jobtypeService.getJobtypes().subscribe
    (jobtypes=>{
      this.jobtypes=jobtypes;
      console.log(jobtypes);
    })
  }

}
