import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '@app/services/user.service';
import { AlertService } from '@app/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  keepAfterNavigationChange = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ]
    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.signupForm.controls; }

  getEmailError() {
    return this.f.email.hasError('required') ? 'Enter email' :
      this.f.email.hasError('email') ? 'Enter valid email' :
        '';
  }

  getPasswordError() {
    return this.f.password.hasError('required') ? 'Enter password' :
      this.f.password.hasError('minlength') ? 'Password must be at least 6 characters' :
        '';
  }

  onSubmit() {
    this.submitted = true;
    this.keepAfterNavigationChange = false;
    if (this.signupForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.signup(this.signupForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Sign up successful', false);
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
