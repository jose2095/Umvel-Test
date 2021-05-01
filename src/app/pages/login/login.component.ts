import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //variable declarations
  public authForm: FormGroup;
  public loading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router) {
    this.authForm = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }

  login() {
    this.loading = true;
    this._authService.login(this.authForm.value)
      .subscribe(res => {
        this.loading = false;
        if (res.token) this._router.navigate(['/home']);
      },
        error => {
          this.loading = false;
        })
  }

  ngOnInit(): void {
  }

}
