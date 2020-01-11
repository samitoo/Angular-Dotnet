import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/_models/form';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import {FormService} from 'src/app/_services/form.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  form: Form;

  constructor(private formservice: FormService, private alertify: AlertifyService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // We subsribe to the resolver we created and use the name we gave the resolver in the routers.ts
    this.route.data.subscribe(data => {
      this.form = data['form'];
    });
  }
}
