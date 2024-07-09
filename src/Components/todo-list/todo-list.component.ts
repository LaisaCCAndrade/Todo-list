import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../app/Service/todo.service';
import { Todo } from '../../Model/todo.model';
import { ModalController } from '@ionic/angular';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      (data: Todo[]) => {
        console.log('Dados recebidos:', data); // Adicione este log
        this.todos = data;
      },
      (error: HttpErrorResponse) => console.error('Error fetching todos', error)
    );
  }


  async openEditModal(todo: Todo | null) {
    const modal = await this.modalCtrl.create({
      component: TodoEditComponent,
      componentProps: { todo },
      cssClass: 'custom-modal background',
    });

    modal.onDidDismiss().then(() => {
      // Recarrega a lista de tarefas ao fechar o modal
      this.todoService.getTodos().subscribe(
        (data: Todo[]) => (this.todos = data),
        (error: HttpErrorResponse) => console.error('Error fetching todos', error)
      );
    });

    return await modal.present();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        // Recarrega a lista após a exclusão
        this.todoService.getTodos().subscribe(
          (data: Todo[]) => (this.todos = data),
          (error: HttpErrorResponse) => console.error('Error fetching todos', error)
        );
      },
      (error: HttpErrorResponse) => console.error('Error deleting todo', error)
    );
  }
}
