import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: Task = new Task();

  addTask()
  {
    this.taskDataService.addTask(this.newTask).subscribe(
      tasks => this.router.navigate(["list"])
    );
  }

  constructor(private taskDataService: TaskDataService, 
              private router: Router) { }

 ngOnInit() {
  }

}
