// Component Dependencies
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../data/services/auth.service';

// interface Credentials {
//   username: string;
//   password: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginForm: any;

  loading = false;

  credentials = {
    username: '',
    password: ''
  };

  // Subscriptions
  loginSubscription: Subscription | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    // this.loading = this.auth.loading;
  }

  ngOnInit(): any {
    // this.auth.logout();
    this.loginForm = new FormGroup({
      username: new FormControl(this.credentials.username, [
        Validators.required, Validators.email
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required, Validators.minLength(5)
      ])
    });
  }

  /**
   * Method for doing the logging in the app
   */
  login(): any {
    if (this.loginForm.valid) {

      this.loginSubscription = this.auth.login(this.loginForm.value)
        .subscribe(
          (data: any) => {
            console.log(data);
          });

    } else {
      if (this.loginForm.controls.username.status === 'INVALID') {
        alert('El usuario debe ser un email correcto');
      }
      if (this.loginForm.controls.password.status === 'INVALID') {
        alert('La contraseña debe tener al menos 5 caracteres');
      }
    }
  }


  ngOnDestroy(): any {

  }
}
