import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
  rfContact: FormGroup;
  isSubmit = false;
  role = 'personal';
  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      birthDay: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      address: this.fb.array([])
    });
    this.addAddressForm();
  }

  addAddressForm() {
    const formArray = this.rfContact.get('address') as FormArray;
    const FormControl = this.fb.group({
      street: ['', [Validators.required]],
      province: '',
    });
    formArray.push(FormControl);
  };

  removeAddressForm(index: number) {
    const formArray = this.rfContact.get('address') as FormArray;
    formArray.removeAt(index);
  }

  onSubmit() {
    console.log(this.rfContact.controls.contactName.errors);
    console.log(this.rfContact.controls.phoneNumber.errors);
    this.isSubmit = true;
  }
}
