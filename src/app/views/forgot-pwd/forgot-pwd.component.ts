import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onForgotPwd(email: string) {
    if(email.length > 0) {
      this.authService.forgotPwd({useremail: email}).subscribe(res => {
        console.log(res);
      })
    }else {
      alert('Please provide email');
    }
  }

}
