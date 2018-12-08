import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class PostService implements OnInit {

  posts: Post[] = [];



  constructor() {
  }



  ngOnInit(): void {
  }



  searchByAuthor(author: string): Post[] {
    const results: Post[] = [];
    console.log('Author: ' + author);
    this.posts.forEach(post => {
      console.log('- post Author: ' + post.author);
      if (post.author === author) {
        results.push(post);
      }
    });
    return results;
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



  addComment(text: string, author: string) {

  }

}
