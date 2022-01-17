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
  // username: string;
  // password: string;

  credentials = {
    username: '',
    password: ''
  };

  // Subscriptions
  // loginSubscription: Subscription;

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
    if (this.loginForm.valid){
      console.log('valid');
    }else{
      console.log('false');
    }
    // this.loading = true;
    // this.loginSubscription = this.auth.login(this.loginForm.value)
    //   .subscribe(
    //     (data) => {
    //       this.loginForm.reset();
    //       this.loading = false;
    //       if (data.user.roles[0] === this.roleFinancial) {
    //         this.router.navigate(['/promotions/list']);
    //       } else if (data.user.roles[0] === this.roleCommercialNoEdit) {
    //         this.router.navigate(['/dashboard/historic']);
    //       } else {
    //         this.router.navigate(['/tasks']);
    //       }
    //       this.notifService.setNotification(this.commonService.getTranslation('LOGIN.NOTIF.SUCCESS'), 'success', 15000);
    //       if (data.user && data.user.notifications) {
    //         this.getAlerts(data.user.id);
    //       }
    //     },
    //     () => {
    //       if (this.loginForm.invalid) {
    //         this.notifService.setNotification(this.commonService.getTranslation('LOGIN.NOTIF.PENDING'), 'loginError', 15000);
    //       } else {
    //         this.notifService.setNotification(this.commonService.getTranslation('LOGIN.NOTIF.ERROR'), 'loginError', 15000);
    //       }
    //     // }
    //   );
  }


  ngOnDestroy(): any {

  }
}
