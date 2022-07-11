import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// <section class="contact-page-area">
//   <div class="container shadow" style="margin-top: 5%;padding-top: 4%; padding-bottom: 5%;">
//       <div class="row page-title">
//           <div class="col-md-5 col-sm-6">
//               <div class="pricing-desc section-padding-two">
//                   <div class="pricing-desc-title">
//                       <div class="title">
//                           <!-- <h2>Login</h2> -->
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       <div class="row">
//           <div class="col-md-3"></div>
//           <div class="col-md-6 col-sm-2">
//             <h2>Login Jobseeker</h2>
//               <div class="contact-form">
//                   <form [formGroup]="formGroup" (ngSubmit)="loginProcess()">
//                       <input type="email" name="email" placeholder="email" formControlName="email" class="form-control mb-3">
//                       <input type="password" name="password" placeholder="password" formControlName="password"class="form-control mb-3">
//                       <button class="btn submit-btn mb-3" type="submit" name="submit">Submit</button>
//                   </form>
//               </div>
//               <div class="form-query">Dont have an account? <a routerLink='/register'href="">Signup</a></div>
//           </div>
//           <div class="col-md-3"></div>
//       </div>
//   </div>
// </section>

// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { Auth } from 'src/app/models/apiclass';
// import { first } from 'rxjs/operators';



// @Component({
//   selector: 'app-loginjobseeker',
//   templateUrl: './loginjobseeker.component.html',
//   styleUrls: ['./loginjobseeker.component.css']
// })
// export class LoginjobseekerComponent implements OnInit {
  
//   formGroup!: FormGroup;

//   constructor(private authService: AuthService , private router:Router) { }

//   ngOnInit(): void {
//     this.initForm()
//   }

//   initForm(){
//     this.formGroup = new FormGroup({
//       email : new FormControl('', [Validators.required]),
//       password : new FormControl('', [Validators.required]),
//     })
//   }

//   loginProcess(){
//     if(this.formGroup.valid){
//       this.authService.loginJobseeker(this.formGroup.value).subscribe(
//         response => {
//           alert('success')
//         },
//         error => {
//           alert('error')
//         }
//       )
//     }
//   }
// }
