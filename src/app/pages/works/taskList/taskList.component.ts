import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasksArr = new Array<TaskModel>();
  public newTaskName!: string;
  public countOfTasks!: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.countOfTasks = this.tasksArr.length;
  }

  addNewTask(form: NgForm) {
    let newTask = new TaskModel();
    newTask.taskName = this.newTaskName;
    newTask.doneStatus = false;
    this.tasksArr.push(newTask);
    console.log(this.tasksArr);
    form.reset();
  }

}
