import { DatePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { CardComponent } from "../../molecules/card/card.component";
import { TasksService } from '../../molecules/tasks/tasks.service';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService)

  onCompleteTask = () => this.tasksService.removeTask(this.task().id)
}
