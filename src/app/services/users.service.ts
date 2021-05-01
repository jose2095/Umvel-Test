import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserDetail } from '../models/UserDetail';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private endpoint:string = environment.apiUrl+'users/'; 
  constructor(private _http:HttpClient) { }

  getUsers(page:string):Observable<Users>{
    return this._http.get<Users>(this.endpoint,{params:{page}});
  }

  getUserDetail(id:number):Observable<UserDetail>{
    return this._http.get<UserDetail>(this.endpoint+id);
  }

  editUser(user:User):Observable<User>{
    return this._http.put<User>(this.endpoint+user?.id,{user})
  }
}
