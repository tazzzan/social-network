import {Component, OnInit} from '@angular/core';
import {PostService} from '../posts/postservice.service';
import {Post} from "../posts/post.class";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  results: Post[] = [];

  constructor(public postService: PostService) {

  }

  ngOnInit() {
  }

  searchByAuthor(author: string) {
    this.results = [];
    this.results = this.postService.searchByAuthor(author);
  }

}
