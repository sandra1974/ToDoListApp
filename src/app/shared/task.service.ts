import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../shared/task';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {


  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

 
  getTasks(): Observable<Task> {
    return this.http.get<Task>(this.apiURL + '/tasks')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  getTask(id): Observable<Task> {
    return this.http.get<Task>(this.apiURL + '/tasks/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  
  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiURL + '/tasks', JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

 
  updateTask(id, task): Observable<Task> {
    return this.http.put<Task>(this.apiURL + '/tasks/' + id, JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

 
  deleteTask(id){
    return this.http.delete<Task>(this.apiURL + '/tasks/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       
       errorMessage = error.error.message;
     } else {
     
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}