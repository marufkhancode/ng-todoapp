import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.services';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoinput: string;
  constructor(private todoservice: TodoService) { }
  values = "";
  ngOnInit() {
  }

  addTask() {
    const newlist = new Todo(this.todoinput);
    this.todoinput = '';
    this.todoservice.addTodolist(newlist);
  }


}
