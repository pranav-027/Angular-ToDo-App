import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

 
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  

onClick(todo){
  this.todoDelete.emit(todo);
  console.log("Clicked")
}
onCheckboxClick(todo)
{
 this.todoCheckbox.emit(todo);
}
}
