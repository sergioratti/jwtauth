import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {

    if (!this.isLoggedIn()) {
      this.router.navigateByUrl('login');
      return false
    }
    else
      return true;

  }

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem('token');
    let loggedin = token !== null;
    return loggedin;
  }

  login(email: string, hashpassword: string) {

    this.http.post('http://localhost:3300/api/users/login', { username: email, password: hashpassword }, { withCredentials: true }).toPromise()
      .then(results => {
        // I got the token
        if (results) {
          let token = results['token'];
          sessionStorage.setItem('token', token);
          this.router.navigateByUrl('');
        }
        return null;
      })

  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }


}
