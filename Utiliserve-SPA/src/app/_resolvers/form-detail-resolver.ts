import { Injectable } from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { FormService } from '../_services/form.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Form } from '../_models/form';

@Injectable()

export class FormDetailResolver implements Resolve<Form> {

    constructor(private formService: FormService, private router: Router, private alertify: AlertifyService) {}

    // resolve automatically subscribes, so we dont have to ourselves, but we need to catch errors
    // we get the data from the route ahead of time, not from the load method
    resolve(route: ActivatedRouteSnapshot): Observable<Form> {
        return this.formService.getForm(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retreiving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}