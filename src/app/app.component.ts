import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todolists: Todo[];
  todoForm: boolean;
  isNewTodo: boolean;
  newTodo: any = {};
  editTodoForm: boolean;
  editedTodo: any = {};

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todolists = this.getTodos();
  }

  getTodos(): Todo[] {
    return this.todoService.getTodosFromData();
  }

  showEditTodoForm(todo: Todo) {
    if (!todo) {
      this.todoForm = false;
      return;
    }
    this.editTodoForm = true;
    this.editedTodo = todo;
  }

  showAddTodoForm() {
    // resets form if edited todo task
    if (this.todolists.length) {
      this.newTodo = {};
    }
    this.todoForm = true;
    this.isNewTodo = true;

  }

  saveTodo(todo: Todo) {
    if (this.isNewTodo) {
      // add a new todo task
      this.todoService.addTodo(todo);
    }
    this.todoForm = false;
  }

  updateTodo() {
    this.todoService.updateTodo(this.editedTodo);
    this.editTodoForm = false;
    this.editedTodo = {};
  }

  removeTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  cancelEdits() {
    this.editedTodo = {};
    this.editTodoForm = false;
  }

  cancelNewTodo() {
    this.newTodo = {};
    this.todoForm = false;
  }

}
