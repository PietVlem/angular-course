import { Component, input, signal } from '@angular/core';
import { TaskComponent } from '../../atoms/task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  isAddingTask = signal<boolean>(false)
  
  constructor(private tasksService: TasksService) {}

  selectedUserTasks = () => this.tasksService.getUserTasks(this.userId())

  onStartAddTask = () => this.isAddingTask.set(true)
  onCancelAddTask = () => this.isAddingTask.set(false)

  onAddTask = () => this.isAddingTask.set(false)
}
