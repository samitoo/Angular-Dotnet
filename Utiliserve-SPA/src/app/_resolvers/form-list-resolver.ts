import { Injectable } from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormService } from '../_services/form.service';
import { Form } from '../_models/form';

@Injectable()

export class FormListResolver implements Resolve<Form[]> {

    constructor(private  formService: FormService, private router: Router, private alertify: AlertifyService) {}

    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    resolve(route: ActivatedRouteSnapshot): Observable<Form[]> {
        return this.formService.getForms().pipe(
            catchError(error => {
                this.alertify.error('Problem retreiving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}