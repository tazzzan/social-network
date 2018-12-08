import {Comment} from "./comment.class";

export class Post {
  text: string;
  author: string;
  comments: Comment[] = [];



  constructor(text: string, author: string) {
    this.text = text;
    this.author = author;
  }



  addComment(text: string, author: string) {
    this.comments.push(new Comment(text, author));
  }

}
