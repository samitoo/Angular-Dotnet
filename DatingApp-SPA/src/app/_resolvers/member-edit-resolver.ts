import { Injectable } from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()

export class MemberEditResolver implements Resolve<User> {

    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService, 
        private authService: AuthService) {}

    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retreiving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}