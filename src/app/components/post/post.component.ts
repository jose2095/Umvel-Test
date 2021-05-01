import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DialogService } from 'src/app/services/dialog.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts:any;
  constructor(private _postService:PostsService,private _dialogService:DialogService) { }

  ngOnInit(): void {
  }

  deletePost(id:number){
    this._postService.deletePost(id)
    .subscribe(()=>{
      this._dialogService.open("Done","completed successfully");
    },err=>{
      this._dialogService.open("Error","an error occurred");
    })
  }

}
