import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  passValid;
  isError = false;
  isSuccess = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this.isError = false;
    console.log(this.user);
    this.authService.register(this.user).subscribe(value => {
      console.log(value);
      this.isSuccess = true;
      setTimeout(() => {
        this.router.navigate(['auth', 'login']).then();
      }, 1000);
    }, () => {
      this.isError = true;
    });
  }

}
