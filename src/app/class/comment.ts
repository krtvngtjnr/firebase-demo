import * as moment from 'moment';
import { User } from './user';

export class Comment {

  user: User;
  initial: string;
  content: string;
  date: number;

  constructor(user: User, content: string) {
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.content = content;
    this.date = +moment();
  }
}
