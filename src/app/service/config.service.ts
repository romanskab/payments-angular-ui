import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  // for localhost:
  private host = 'http://localhost:8081';

  // for cloud:
  // private host = '...';

  api = this.host + '/api/v1';

}
