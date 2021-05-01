import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts:any;
  constructor(private _postService:PostsService) { }

  ngOnInit(): void {
  }

  deletePost(id:number){
    this._postService.deletePost(id)
    .subscribe(res=>{
      alert(JSON.stringify(res))
    })
  }

}
