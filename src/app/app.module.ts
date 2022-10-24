import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './configs/components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './configs/components/post/post.component';
import { CommentsComponent } from './configs/components/comments/comments.component';
import { CommentComponent } from './configs/components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
