import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auditor-form',
  templateUrl: './auditor-form.component.html',
  styleUrls: ['./auditor-form.component.scss']
})
export class AuditorFormComponent implements OnInit {

  
  aditorForm = this.fb.group({
    nombre: [null, Validators.required],
    cedula: [null, Validators.compose([
      Validators.required, Validators.minLength(9), Validators.maxLength(12)])
    ],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }


  ngOnInit() {
  }

}
