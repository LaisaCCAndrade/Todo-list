import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from '../Components/todo-list/todo-list.component';
import { TodoFormComponent } from '../Components/todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { TodoEditComponent } from 'src/Components/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
