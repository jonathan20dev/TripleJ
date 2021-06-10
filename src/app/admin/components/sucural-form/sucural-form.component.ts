import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sucural-form',
  templateUrl: './sucural-form.component.html',
  styleUrls: ['./sucural-form.component.scss']
})
export class SucuralFormComponent implements OnInit {

  sucursalForm = this.fb.group({
    nombre: [null, Validators.required]
  });


  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }


  ngOnInit() {
  }

}
