import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  editTask: Task = new Task();

  saveEdit()
  {
    this.taskDataService.editTask(this.editTask).subscribe(
      task => this.router.navigate(["list"])
    );
  }

  constructor(private taskDataService: TaskDataService, 
              private router: Router,
              private route: ActivatedRoute) 
  { }

  ngOnInit() 
  {
    this.route.params.subscribe(
      param => 
      {
        this.taskDataService.getTask(+param["id"]).subscribe(
          task => this.editTask = task
        );
      }
    );
  }

}
