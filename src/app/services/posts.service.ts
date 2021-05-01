import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private endpoint = environment.posturl+'posts';

  constructor(private _http:HttpClient) { }

  getPosts(userId:string):Observable<Array<Post>>{
    return this._http.get<Array<Post>>(this.endpoint,{params:{userId}});
  }

  deletePost(userId:number):Observable<any>{
    return this._http.delete(this.endpoint+'/'+userId);
  }

  getAllPosts():Observable<Array<Post>>{
    return this._http.get<Array<Post>>(this.endpoint);
  }
}
