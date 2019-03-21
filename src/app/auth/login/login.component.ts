import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { UserService } from '@app/services/user.service';
import { AlertService } from '@app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  getEmailError() {
    return this.f.email.hasError('required') ? 'Enter email' :
      this.f.email.hasError('email') ? 'Enter valid email' :
        '';
  }

  getPasswordError() {
    return this.f.password.hasError('required') ? 'Enter password' :
      '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/travall'])
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
