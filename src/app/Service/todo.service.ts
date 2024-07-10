import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from '../../Model/todo.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5001/api/todos';
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  private loadTodos() {
    this.http.get<Todo[]>(this.apiUrl).subscribe((todos) => {
      this.todosSubject.next(todos);
    });
  }

  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.apiUrl, todo)
      .pipe(tap(() => this.loadTodos()));
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.loadTodos()));
  }

  updateTodo(id: number, todo: Todo): Observable<void> {
    return this.http
      .put<void>(`${this.apiUrl}/${id}`, todo)
      .pipe(tap(() => this.loadTodos()));
  }
}
