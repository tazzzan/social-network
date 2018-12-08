import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class PostService implements OnInit {

  posts: Post[] = [];



  constructor() {
  }



  ngOnInit(): void {
  }



  searchByAuthor() {

  }



  addPost(text: string, author: string) {
    this.posts.push(new Post(text, author));
  }

}

export class Post {
  text: string;
  author: string;
  comments: string[] = [];



  constructor(text: string, author: string) {
    this.text = text;
    this.author = author;
  }
}
