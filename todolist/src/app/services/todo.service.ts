import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
      return this.http.get<Todo[]>(`${this.apiUrl}${this.todosLimit}`);
  }

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
