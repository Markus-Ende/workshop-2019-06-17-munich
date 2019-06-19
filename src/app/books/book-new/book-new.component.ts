import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['new title', [Validators.required]],
      isbn: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  hasError(name: string, errorType: string) {
    return (
      this.form.get(name).hasError(errorType) && this.form.get(name).touched
    );
  }

  onSubmit() {
    console.log('submit', this.form.value);
  }
}
