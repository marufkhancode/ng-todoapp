import { Todo } from "../shared/todo.model";
import { Subject } from "rxjs";

export class TodoService {
    updateText: string;
    todolistchange = new Subject<Todo[]>();
    todos: Todo[] = [
        new Todo("Make dinner tonight!"),
        new Todo("Fold the laundry."),
        new Todo("Learn to make a Angular app!")
    ];

    getTodoList(){
        return this.todos.slice();
    }
    addTodolist(todos: Todo){
        this.todos.push(todos);
        this.todolistchange.next(this.todos.slice());
    }

    deleteTodolist(index: number){
        this.todos.splice(index, 1);
        this.todolistchange.next(this.todos.slice());
    }
    
    updateTodolist(index: number, updatetodo: Todo){
        this.todos[index] = updatetodo;
        this.todolistchange.next(this.todos.slice());
    }


    
}