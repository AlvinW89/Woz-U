import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskDataService: TaskDataService) { }

  getTasks() : void
  {
    // tslint:disable-next-line: deprecation
     this.taskDataService.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

  removeTask(id: number) : void
  {
    this.taskDataService.removeTask(id).subscribe(
     task => this.getTasks()
    );
  }

  ngOnInit() {
    this.getTasks();
  }

}
