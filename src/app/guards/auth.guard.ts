import { Injectable } from '@angular/core';
import { CanActivateChild, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  
  constructor(private _authService:AuthService, private _router:Router){}

  canActivateChild(): boolean {
    if(!this._authService.userToken){
      this._router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
  
}
