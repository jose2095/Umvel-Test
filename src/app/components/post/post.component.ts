import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { DialogService } from 'src/app/services/dialog.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts:Post;
  @Input() index:number;
  @Output() delete:EventEmitter<number>=new EventEmitter<number>();

  constructor(private _postService:PostsService,private _dialogService:DialogService) { }

  ngOnInit(): void {
  }

  /**
   * delete post and emit index to remove of array 
   * 
   * @param {number} id user id 
   */
  deletePost(id:number){
    this._postService.deletePost(id)
    .subscribe(()=>{
      this._dialogService.open("Done","completed successfully");
      this.delete.emit(this.index);
    },err=>{
      this._dialogService.open("Error","an error occurred");
    })
  }

}
