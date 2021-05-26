import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.vendeur.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-login-vendeur',
  templateUrl: './login-vendeur.page.html',
  styleUrls: ['./login-vendeur.page.scss'],
})
export class LoginVendeurPage implements OnInit {

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

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigateByUrl('/espace-vendeur'); // navigate vers tableau de bord vendeur
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
