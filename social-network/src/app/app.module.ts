import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsColumnComponent } from './posts-column/posts-column.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {PostService} from './posts/postservice.service';
import {TextfieldComponent} from "./textfield/textfield.component";
import { PostComponent } from './posts/post/post.component';
import { AddCommentComponent } from './posts/post/add-comment/add-comment.component';
import {CommentComponent} from './posts/post/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsColumnComponent,
    SearchBarComponent,
    PostsColumnComponent,
    TextfieldComponent,
    PostComponent,
    AddCommentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
