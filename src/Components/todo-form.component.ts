import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../app/Service/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../Model/todo.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      isCompleted: [false]
    });
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.todoService.getTodoById(this.todoId).subscribe(
        (todo: Todo) => this.todoForm.patchValue(todo),
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Error fetching todo';
          console.error('Error fetching todo', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const todo: Todo = this.todoForm.value;
      if (this.todoId) {
        this.todoService.updateTodo(this.todoId, todo).subscribe(
          () => {
            this.successMessage = 'Todo updated successfully';
            this.router.navigate(['/todos']); // Navegar de volta para a lista
          },
          (error: HttpErrorResponse) => {
            this.errorMessage = 'Error updating todo';
            console.error('Error updating todo', error);
          }
        );
      } else {
        this.todoService.addTodo(todo).subscribe(
          () => {
            this.successMessage = 'Todo added successfully';
            this.router.navigate(['/todos']); // Navegar de volta para a lista
          },
          (error: HttpErrorResponse) => {
            this.errorMessage = 'Error adding todo';
            console.error('Error adding todo', error);
          }
        );
      }
    }
  }
}
