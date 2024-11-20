import { Injectable } from '@angular/core';
import { dummyTasks } from '../../../../../data/tasks';
import { type NewTaskData } from '../../atoms/task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if(!tasks) return

        this.tasks = JSON.parse(tasks);
    }

    private saveTasks = () => 
        localStorage.setItem('tasks', JSON.stringify(this.tasks))

    getUserTasks = (userId: string) => 
        this.tasks.filter((task) => task.userId === userId);

    addTask = (newTask: NewTaskData, userId: string) => {
        this.tasks = ([...this.tasks, {
            id: new Date().getTime().toString(),
            userId: userId,
            ...newTask
        }])
        this.saveTasks()
    }

    removeTask = (taskId: string) => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId)
        this.saveTasks()
    }
}