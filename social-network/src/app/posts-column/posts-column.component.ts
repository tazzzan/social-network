import {Component, OnInit} from '@angular/core';
import {PostService} from '../posts/postservice.service';

@Component({
  selector: 'app-posts-column',
  templateUrl: './posts-column.component.html',
  styleUrls: ['./posts-column.component.scss']
})
export class PostsColumnComponent implements OnInit {

  name: string = 'Posts:';



  constructor(public postService: PostService) {

  }



  ngOnInit() {

    this.postService.addPost('Today is a good day!', 'Nico');
    this.postService.addPost('Tomorrow is a good day!', 'Manu');
  }

}
