import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Guard
  // Un service Angular qui implemente l'interfaces suivante
  // CanActivate : verifie si un utilisateur peut visiter une route.

  // On veut que l’acces a la route /personne soit seulement autorise
  // aux utilisateurs authentifies

  constructor(private router: Router, private tokenService: TokenStorageService) { }

  // CanActivate : verifie si un utilisateur peut visiter une route.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Pour recuperer une variable de localStorage
    if (Boolean(this.tokenService.getToken())){
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }

}
