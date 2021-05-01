import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PostComponent } from './post/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ UserComponent, UserdetailComponent, PostComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [UserComponent,UserdetailComponent,PostComponent,ToolbarComponent]
})
export class ComponentsModule { }
