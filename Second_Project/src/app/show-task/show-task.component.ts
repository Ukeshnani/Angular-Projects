import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'show-task',
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  tasks: string[]=['working','reading','playing']
  taskService = inject(TaskService)

  ngOnInit(): void {
    this.taskService.createNewTask.subscribe((val)=>{
      this.tasks.push(val)

    })
      
  }

}
