import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../todo.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  index: number;
  updatetxt: string;
  @ViewChild('content') public contentModal;
  private subscription: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodoList();
    this.subscription = this.todoService.todolistchange
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
  }


  onDelete(index) {
    this.todoService.deleteTodolist(index);
    // console.log(index);
  }
  show(index) {
    console.log(index);
     this.index = index;
    this.contentModal.show();
    this.updatetxt = '';
  }


  onUpdate(){
    const updatelist = new Todo(this.updatetxt);
    this.todoService.updateTodolist(this.index,updatelist);
    this.updatetxt = '';
    this.contentModal.hide();
    // console.log(this.index);
  }


}
