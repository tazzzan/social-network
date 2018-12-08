import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts-column',
  templateUrl: './posts-column.component.html',
  styleUrls: ['./posts-column.component.scss']
})
export class PostsColumnComponent implements OnInit {

  name: string = 'Posts:';

  posts: Post[] = [];



  constructor() {
  }



  ngOnInit() {
    this.posts.push(new Post('Today is a good day!', 'Nico'));
    this.posts.push(new Post('Tomorrow is a good day!', 'Manu'));
  }

  addPost(text: string, author:string){
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
