import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('');

  ngOnInit(): void {
    this.name.valueChanges.subscribe((valueChange) => {
      console.log(valueChange)
    })
  }

  setFormValue(): void {
    this.name.setValue("Test")
  }
}
