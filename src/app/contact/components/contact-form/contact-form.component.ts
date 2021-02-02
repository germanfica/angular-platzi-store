import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = {} as FormGroup;
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullname:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required]],
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
  }
}
