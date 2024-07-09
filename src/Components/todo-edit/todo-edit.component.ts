import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../../app/Service/todo.service';
import { Todo } from '../../Model/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  @Input() todo!: Todo;
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private todoService: TodoService
  ) {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      isCompleted: [false]
    });
  }

  ngOnInit() {
    if (this.todo) {
      this.todoForm.patchValue({
        title: this.todo.title,
        description: this.todo.description
      });
    }
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const updatedTodo: Todo = { ...this.todo, ...this.todoForm.value };
      this.todoService.updateTodo(this.todo.id, updatedTodo).subscribe(() => {
        this.dismiss();
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
