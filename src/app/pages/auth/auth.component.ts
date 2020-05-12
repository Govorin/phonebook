import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/state/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submitForm(){
    this.userService.auth(this.authForm.value);
    this.router.navigate(['/contacts']);
  }
}
