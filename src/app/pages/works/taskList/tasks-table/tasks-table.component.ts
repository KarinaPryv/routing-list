import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {

  @Input() tasks!: Array<TaskModel>

  public isEdited = false;
  public editedTaskName!: string;
  private indexOfEditedTask!: number

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(taskIndex: number) {
    let changedTask = new TaskModel();
    changedTask.taskName = this.tasks[taskIndex].taskName;
    changedTask.doneStatus = !this.tasks[taskIndex].doneStatus;
    this.tasks.splice(taskIndex, 1, changedTask);
  }

  editTask(taskIndex: number) {
    this.editedTaskName = this.tasks[taskIndex].taskName;
    this.isEdited = true;
    this.indexOfEditedTask = taskIndex
  }

  saveEditedUser() {
    let editedTask = new TaskModel();
    editedTask.taskName = this.editedTaskName;
    editedTask.doneStatus = false;
    this.tasks.splice(this.indexOfEditedTask, 1, editedTask);
    this.isEdited = false;
  }

  deleteTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }

}
