import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DialogService } from 'src/app/services/dialog.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  @Input() user:User;

  
  constructor(private _userService:UsersService,private _dialogService:DialogService) { 
   
  }

  ngOnInit(): void {
  }


ngOnDestroy(): void {
  this.user=null;
}

  editUser(){
   this._userService.editUser(this.user)
   .subscribe(()=>{
    this._dialogService.open("Done","completed successfully");
   },err=>{
    this._dialogService.open("Error","an error occurred");
   })
  }

}
