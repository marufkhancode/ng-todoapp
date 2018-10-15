import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(public fb: FormBuilder,
    private authservice: AuthService,
    private router: Router) { 
    this.signupForm = fb.group({
      simpleFormEmail: ['', [
        Validators.required, 
        Validators.email]],

      simpleFormPassword: ['', [
      Validators.required, 
      Validators.minLength(6),
        Validators.maxLength(10)]],
    });
  }
  onSignUp(){
    const email = this.signupForm.value.simpleFormEmail;
    const pass = this.signupForm.value.simpleFormPassword;
    this.authservice.signupUser(email,pass);
    this.router.navigate(['signin']);
  }

  ngOnInit() {
    
  }

}
