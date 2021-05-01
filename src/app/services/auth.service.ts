import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../models/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint:string = environment.apiUrl+'login';
  public token:BehaviorSubject<string|null>;
  
  constructor(private _http:HttpClient,private _router:Router) {
    this.token= new BehaviorSubject(
      localStorage.getItem('token')
    )
  }


  /**
   * @return user token
   */
  public get userToken(): string {
    return this.token.value;
  }

  
  login(user:AuthUser):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(this.endpoint,user)
    .pipe(map(res=>{
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.token.next(res.token);
      }
      return res;
    }))
  }

  
  logOut(){
    localStorage.removeItem('token');
    this.token.next(null);
    this._router.navigate(['/login'])
  }
}





interface AuthResponse{
  token:string
}