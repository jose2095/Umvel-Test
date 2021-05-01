import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:User;
  constructor(private _userService:UsersService) { }

  ngOnInit(): void {
  }

  editUser(){
    this._userService.editUser(this.user)
    .subscribe(res=>{
      alert(JSON.stringify(res))
    })
  }

}
