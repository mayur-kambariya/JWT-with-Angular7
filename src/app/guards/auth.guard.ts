import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    // CanActivate method override 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // If not login user the redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}