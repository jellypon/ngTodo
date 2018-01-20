import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
    ])
  ]})
export class AngularComponent implements OnInit {
  todoList: Array<TodoVO>;
  newTodo: TodoVO = new TodoVO();  // 투두 추가를 위한 객체

  // 수정 시 담을 컬렉션
  tempTodoList: Map<number, TodoVO> = new Map<number, TodoVO>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.userService.getTodoList()
      .subscribe((data: Array<TodoVO>) => {
        console.log(data);
        this.todoList = data;
      });
  }

  addTodo() {
/*    console.log('addTodo');*/
    this.userService.addTodo(this.newTodo)
      .subscribe((data: TodoVO) => this.todoList.unshift(data));
  }

  // Template form을 에디터로 전환
  save(item: TodoVO) {
    item.isEdited = true;
    // 기존값 저장 : deep copy 사용해야함
    const newTodo = new TodoVO();
    newTodo.isFinished = item.isFinished;
    newTodo.todo = item.todo;
    this.tempTodoList.set(item.todo_id, newTodo);
  }

  // Server에 데이터를 삭제
  remove(item: TodoVO) {

  }

  // 에디터 폼을 Template폼으로 복귀
  restore (item: TodoVO) {
    item.isEdited = false;
    // 기존값 복원
    const todoVO = this.tempTodoList.get(item.todo_id);
    item.isFinished = todoVO.isFinished;
    item.todo = todoVO.todo;
  }

  // Server에 데이터 수정
  modify(item: TodoVO) {

  }
}
