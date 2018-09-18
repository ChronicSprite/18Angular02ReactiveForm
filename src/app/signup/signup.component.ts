import { Component, OnInit } from '@angular/core';
import { SignupModel } from './signup-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: SignupModel = new SignupModel();
  role = 'personal';
  constructor() { }

  ngOnInit() {
  }

}
