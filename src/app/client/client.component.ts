import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(currentUser => {
      this.user = currentUser;
    });
  }

  toAccounts(): void {
    this.router.navigate(['client', 'accounts']).then();
  }

  toPayments(): void {
    this.router.navigate(['client', 'payments']).then();
  }

  exit(): void {
    console.log('exit');
    this.authService.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['auth', 'login']).then();
    });
  }

}
