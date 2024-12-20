import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.css'
})
export class UserReactiveFormComponent {

  formGroup: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    this.formGroup = this.formBuilder.group({
      lastName: [''],
      firstName: ['', [Validators.maxLength(38)]],
      login: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onBlur() {
    var value = this.formGroup.get('firstName')?.value;
     
    if((value + '').length < 5) {
      this.formGroup.get('firstName')?.setErrors({'minlength': true});
    }
  }
}
