import { Component, OnInit } from '@angular/core';

import { HttpClientXsrfModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registeremployer',
  templateUrl: './registeremployer.component.html',
  styleUrls: ['./registeremployer.component.css']
})
export class RegisteremployerComponent implements OnInit {

  register: any;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.register= {username:'',email:'',password:'', password2:''};
  }
  goLogin() {
    this.router.navigate(['/', 'loginemployer']);
  }
  registerEmployer(){
    this.authService.registerEmployer(this.register).subscribe(
      response=> {
        alert('Employer has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );
  }

  registerJobseeker(){
    this.authService.registerJobseeker(this.register).subscribe(
      response=> {
        alert('Jobseeker has been registered successfully!')
        this.goLogin()
      },
      error=> console.log (error)
    );
  }

}
