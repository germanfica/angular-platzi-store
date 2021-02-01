import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platzi } from '@core/models/platzi';

@Component({
  selector: 'app-platzi',
  templateUrl: './platzi.component.html',
  styleUrls: ['./platzi.component.scss']
})
export class PlatziComponent implements OnInit {
  form: FormGroup;
  platzi: Platzi;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = {} as FormGroup;
    this.platzi = {
      id: '1',
      image: 'assets/images/platzi/react-js/badge.png'
    };
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  startPlatzi(event: Event) {
    event.preventDefault();
  }
}
