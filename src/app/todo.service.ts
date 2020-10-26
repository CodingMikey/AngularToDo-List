import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'Gain more experience Angular'
    },
    {
      id: 2,
      title: '.NET Core',
      description: 'Continue studying .NET Framework & C#'
    }
  ];

  constructor() { }

  getTodosFromData(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);

  }
  updateTodo(todo: Todo) {
    const index = this.todos.findIndex(u => todo.id === u.id);
    this.todos[index] = todo;
  }
  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
