// home.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class HomeComponent {
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.inputForm.valid) {
      // Handle form submission logic here
      console.log(this.inputForm.value);
    }
  }
}