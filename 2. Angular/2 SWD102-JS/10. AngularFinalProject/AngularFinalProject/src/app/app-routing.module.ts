import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = 
[
  {
    path: '', redirectTo:'list', pathMatch: 'full'
  },
  {
    path: 'list', component: TaskListComponent
  },
  {
    path: 'add', component: AddTaskComponent
  },
  {
    path: "edit/:id", component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
