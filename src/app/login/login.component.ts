import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reqData: any;

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private userservice: UserService,
              private snackbar: MatSnackBar,
              private router: Router) { }

  durationInSeconds = 2;
  hide = true
  loginForm!: FormGroup;

  ngOnInit(): void {
    console.log("Inside Login");
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginform: any) {
    this.reqData = {
      email: loginform.email,
      password: loginform.password
    }

    console.log(this.reqData);
    this.userservice.login(this.reqData).subscribe((response: any) => {
      console.log("login sucessfull", response['token']);
      localStorage.setItem('token', response['token']);
      this.snackbar.open('login sucessfull')
      this.route.navigate(['dashboard'])
    })

  }

}
