import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./shared/components/atoms/user/user.component";
import { headerComponent } from './shared/components/molecules/header/header.component';
import { TasksComponent } from "./shared/components/molecules/tasks/tasks.component";


import { DUMMY_USERS } from '../data/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = signal(DUMMY_USERS)
  selectedUser = signal(this.users()[0])

  onSelectUser = (id: string) => {
    const user = this.users().find((user) => user.id === id)
    if(!user) return
    this.selectedUser.set(user)
  }
}
