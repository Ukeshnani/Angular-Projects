import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormOne1Component } from './form-one-1/form-one-1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormOne1Component,ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormsProject';
}
