import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  userId = input.required<string>()

  close = output<void>()

  formTitle = signal<string>('')
  formSummary = signal<string>('')
  formDueDate = signal<string>('')

  private tasksService = inject(TasksService)

  onCancel = () => this.close.emit()

  onSubmit = () => {
    this.tasksService.addTask({
      title: this.formTitle(),
      summary: this.formSummary(),
      dueDate: this.formDueDate()
    }, this.userId())
    this.close.emit()
  }
}
