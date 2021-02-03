import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {Role} from '../../model/enums/Role';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isError = false;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.isError = false;
    console.log(this.user);
    this.authService.login(this.user).subscribe(jwtResponse => {
      console.log(jwtResponse);
      localStorage.setItem('token', jwtResponse.tokenType + ' ' + jwtResponse.accessToken);
      this.authService.getCurrentUser().subscribe(currentUser => {
        this.authService.currentUser$.next(currentUser);
        setTimeout(() => {
          if (currentUser.role === Role.ROLE_CLIENT) {
            this.router.navigate(['client']).then();
          }
          if (currentUser.role === Role.ROLE_ADMIN) {
            this.router.navigate(['admin']).then();
          }
        }, 1000);
      });
    }, () => {
      this.isError = true;
    });
  }

}
