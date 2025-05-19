import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'new-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask!:string;
  taskSerice = inject(TaskService)

  addTask(){
    this.taskSerice.onCreateTask(this.newTask)
    this.newTask = ''


  }

}
