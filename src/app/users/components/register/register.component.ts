import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public isReadOnly = false;
  public userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: ['']
    }),
    phone: [''],
    website: [''],
    company: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.isReadOnly = true;
    alert('Submitted');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }
}
