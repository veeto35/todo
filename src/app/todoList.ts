import { TodoItem } from "./todoItem";

export class TodoList {

    constructor(public user : string, private todoItem: TodoItem[] = []) {
        //no statement needed
    }

    get items():readonly TodoItem[]{
        return this.todoItem;
    }

    addItem(task: string){
        this.todoItem.push(new TodoItem(task));
    }

}