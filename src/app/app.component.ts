import { Component } from '@angular/core';
import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'Suzukiの1つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの1つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  content = '';
  comments = COMMENTS;
  currentUser = CURRENT_USER;

  addcomment(comment: string) {
    if(comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
