import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '../Components/todo-list/todo-list.component';
import { TodoFormComponent } from '../Components/todo-form.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/add', component: TodoFormComponent },
  { path: 'todos/edit/:id', component: TodoFormComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
