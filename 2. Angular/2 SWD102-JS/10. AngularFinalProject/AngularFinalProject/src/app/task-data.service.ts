import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  url: string = "http://localhost:3000/tasks";

  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.url);
  }

  getTask(id: number): Observable<Task>
  {
    return this.http.get<Task>(this.url + "/" + id);
  }

  addTask(task: Task): Observable<Task>
  {
    return this.http.post<Task>(this.url, task);
  }

  editTask(task: Task): Observable<Task>
  {
    return this.http.put<Task>(this.url + "/" + task.id, task);
  }

  removeTask(id: number): Observable<Task>
  {
    return this.http.delete<Task>(this.url+ "/" + id);
  }


  constructor(private http: HttpClient) { }
}
