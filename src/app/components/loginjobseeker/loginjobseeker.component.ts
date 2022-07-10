import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Auth } from 'src/app/models/apiclass';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-loginjobseeker',
  templateUrl: './loginjobseeker.component.html',
  styleUrls: ['./loginjobseeker.component.css']
})
export class LoginjobseekerComponent implements OnInit {
  
  login:any;
  user_id!:number;
  constructor(private authService : AuthService, private router: Router) {}
  ngOnInit(){
    this.login = {
      username : '',
      password : ''
    };
  }
  loginJobseeker(){
    this.authService.loginJobseeker(this.login).subscribe(
      response => {
        console.log(response);
        this.user_id = response.user_id
        console.log(this.user_id)
            this.router.navigateByUrl('/jobdashboard/'+`${this.user_id}`);
      },
      error => console.log('error',error)
    );
  }
}
