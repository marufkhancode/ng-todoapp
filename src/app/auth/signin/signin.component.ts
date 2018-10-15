import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { SweetAlertService } from 'angular-sweetalert-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    private authservice: AuthService) { 
    this.signinForm = fb.group({
      simpleFormEmail: ['', [
        Validators.required, 
        Validators.email]],

      simpleFormPassword: ['', [
      Validators.required, 
      Validators.minLength(6),
        Validators.maxLength(10)]],
    });
  }
  OnSignup(){
    this.router.navigate(['signup']);
  }
  onSignIn(){
    const email = this.signinForm.value.simpleFormEmail;
    const pass = this.signinForm.value.simpleFormPassword;
    this.authservice.signinUser(email,pass);
  }
  ngOnInit() {
  }

}
