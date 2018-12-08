import {Injectable, OnInit} from '@angular/core';
import {Post} from "./post.class";

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


