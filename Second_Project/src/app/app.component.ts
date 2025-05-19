import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child2/child2.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ObservablesComponent } from './observables/observables.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child2Component,ContentParentComponent,ObservablesComponent,NewTaskComponent,ShowTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Second_Project';

  
}
