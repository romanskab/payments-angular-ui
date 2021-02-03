import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/User';
import {JwtResponse} from '../model/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  private REGISTER_URL = this.config.api + '/auth/signup';
  private LOGIN_URL = this.config.api + '/auth/signin';
  private LOGOUT_URL = this.config.api + '/auth/signout';
  private CURRENT_USER_URL = this.config.api + '/user';

  currentUser$ = new BehaviorSubject(null);

  register(user): Observable<User> {
    return this.http.post(this.REGISTER_URL, user);
  }

  login(user: User): Observable<JwtResponse>  {
    console.log('login() started');
    return this.http.post(this.LOGIN_URL, user);
  }

  logout(): Observable<string> {
    console.log('logout() started!');
    return this.http.get<string>(this.LOGOUT_URL);
  }

  getCurrentUser(): Observable<User>{
    return this.http.get(this.CURRENT_USER_URL);
  }

}
