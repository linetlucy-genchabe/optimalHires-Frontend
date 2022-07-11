import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginemployer',
  templateUrl: './loginemployer.component.html',
  styleUrls: ['./loginemployer.component.css']
})
export class LoginemployerComponent implements OnInit {
  login:any;
  user_id!:number;
  constructor(private authService : AuthService, private router: Router) {}
  ngOnInit(){
    this.login = {
      username : '',
      password : ''
    };
  }
  loginEmployer(){
    this.authService.loginEmployer(this.login).subscribe(
      response => {
        console.log(response);
        this.user_id = response.user_id
        console.log(this.user_id)
            this.router.navigateByUrl('/dashboard/'+`${this.user_id}`);
      },
      error => console.log('error',error)
    );
  
  }

  

}
