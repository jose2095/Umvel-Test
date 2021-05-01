import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { Users } from 'src/app/models/users';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { Utils } from 'src/app/utils/Utils';
import { ChartType } from 'angular-google-charts'; 
import { ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('chart') chart:MatExpansionPanel;
  @ViewChild('listdrawer') listdrawer:MatDrawer;

  public users:Users;
  public posts:Array<Post>=[];
  public allPosts:Array<Post>=[];
  public selectedUser:User;
  public queySearch:string = '';
  private util=new Utils();
  public type:ChartType= ChartType.AreaChart;
  screenWidth
  data:any= [];
  

  constructor(private _userService:UsersService,private _postService:PostsService,private cdr: ChangeDetectorRef) {
    this.screenWidth = window.innerWidth;
        
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      if(this.screenWidth>640){this.listdrawer.open()}
    }
  }

  ngOnInit(): void {
    this.getUsers('1');
  }

  getUsers(page:string){
    this._userService.getUsers(page)
    .subscribe(res=>{{
      this.users=res;
      this.users.data=this.util.sortData(this.users.data);
      if(this.allPosts.length==0){
        this.getAllPosts();
      }
      else{
        this.data=this.util.filterPosts(this.allPosts,this.users.data);
      }
    }})
  }

  getDetails(id:number){
    this.getUserDetail(id);
    this.getUserPost(id);
    this.chart.close();
    if(this.screenWidth<640){
      this.listdrawer.close();
    }
  }

  private getUserDetail(id:number){
    this._userService.getUserDetail(id)
    .subscribe(res=>{
      this.selectedUser=res.data;
    })
  }

 private getUserPost(id:number){
   this.posts=[];
    this._postService.getPosts(id+"")
    .subscribe(res=>{
      this.posts=res;
    })
  }

  private getAllPosts(){
    this._postService.getAllPosts()
    .subscribe(res=>{
      this.allPosts=res;
      this.data=this.util.filterPosts(this.allPosts,this.users.data);
    })
  }

  nextPage(){
    if(this.users.page<this.users.total_pages)
    this.getUsers((this.users.page+1).toString());
  }

  prevPage(){
    if(this.users.page>0)
    this.getUsers((this.users.page-1).toString());
  }

  sort(){
    this.users.data.reverse();
  }
}
