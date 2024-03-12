import { PostsService } from './../posts.service';
import { Component, EventEmitter, Output } from '@angular/core';

import {Post} from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  

  constructor(public postsService: PostsService){}

  onAddPost(form: NgForm) { 
    // const post:Post = { title: this.enteredTitle, content: this.enteredContent };
   if(form.invalid){
    return;
   }
    const post:Post = { title: form.value.title, content: form.value.content };
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
