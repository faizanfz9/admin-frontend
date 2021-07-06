import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loading = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

  }

  // on Login user
  onLogin(form: NgForm) {
    let user = {
      username: form.value.username,
      password: form.value.password
    };
    this.loading = true;
    this.authService.login(user).subscribe(res => {
      this.loading = false;
      this.authService.setToken(res.data.token);
      this.router.navigate(['/dashboard']);
      console.log(res);
    }, error => {
      this.loading = false;
      alert(error.error.message);
    })
  }

}
