import {Component, OnInit} from '@angular/core';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(currentUser => {
      this.user = currentUser;
    });
  }

  toClients(): void {
    this.router.navigate(['admin', 'clients']).then();
  }

  toRequests(): void {
    this.router.navigate(['admin', 'requests']).then();

  }

  exit(): void {
    console.log('exit');
    this.authService.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['auth', 'login']).then();
    });
  }
}
