import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.client.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  id: number;

  form: any = {
    email: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = '';

  constructor(private router: Router, private authService: AuthService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data.id);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        //this.router.navigateByUrl('/espace-client'); // navigate vers espace cient
        this.router.navigate(['espace-client', data.id]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  goToRegisterClientPage(){
    this.router.navigateByUrl('/register-client');
  }

  /* form: FormGroup;
  type = true;

  constructor() {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }

 /*  changeType() {
    this.type = !this.type;
  } */

  /*onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  } */

}
