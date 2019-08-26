import { Component, OnInit, Input } from '@angular/core';
import { Form } from 'src/app/_models/form';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  @Input() form: Form;

  constructor() { }

  ngOnInit() {
  }

}
