import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog:MatDialog) {
    
  }

  open(title:string,message:string){
    this._dialog.open(DialogComponent,{data:{title,message}});
  }
}
