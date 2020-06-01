import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //SET DYNAMIC CLASSES
  setClasses(){
    let classes = {
      todo: true,
      'is-comeplete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    console.log("tooggle");

    //on server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo));
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
