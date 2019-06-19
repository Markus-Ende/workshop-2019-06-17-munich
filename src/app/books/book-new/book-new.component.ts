import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription = Subscription.EMPTY;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BookDataService
  ) {}

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
    this.subscription = this.booksService
      .createBook({ ...this.form.value })
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
