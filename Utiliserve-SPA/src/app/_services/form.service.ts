import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../_models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  bareUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.bareUrl + 'forms');
  }

  getForm(id): Observable<Form> {
    return this.http.get<Form>(this.bareUrl + 'forms/' + id);
  }

  updateForm(id: number, form: Form) {
    return this.http.put(this.bareUrl + 'forms/' + id, form);
  }



}
