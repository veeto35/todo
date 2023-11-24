import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  private list = new TodoList("Bob",[
    new TodoItem("Go for run",true),
    new TodoItem("Get flowers"),
    new TodoItem("GEt tickets"),
  ]);

  get username(): string {
    return this.list.user;

  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

get items(): readonly TodoItem[]{

  return this.list.items;
}

}
