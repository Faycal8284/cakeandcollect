import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.client.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {

  id: number;
  type = true;

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

  changeType() {
    this.type = !this.type;
  }
}
