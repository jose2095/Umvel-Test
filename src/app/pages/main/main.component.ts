import { HostListener } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  @ViewChild('sidenav') drawer:MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.cdr.detectChanges();
    
    
    if(this.screenWidth>1025){
      this.drawer.mode='side';
      this.drawer.open()
    }else{
      this.drawer.close()
      this.drawer.mode='over'
    }
    
  }

  public screenWidth:number=0;

  constructor(private cdr: ChangeDetectorRef, public _authService:AuthService) {
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.screenWidth<1025) {
      this.drawer.mode='over'; 
      this.drawer.opened=false
    }
  }

 
}
