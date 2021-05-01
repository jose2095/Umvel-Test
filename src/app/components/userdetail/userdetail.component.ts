import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  @Input() user:User;

  
  constructor(private _formBuilder:FormBuilder) { 
   
  }

  ngOnInit(): void {
  }


ngOnDestroy(): void {
  this.user=null;
}

  editUser(){
   
  }

}
