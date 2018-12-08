import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../posts/postservice.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
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
