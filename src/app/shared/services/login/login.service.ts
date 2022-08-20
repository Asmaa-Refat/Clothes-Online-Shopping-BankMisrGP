import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../../utilities/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  isLogged: boolean = false;
  baseURL = environment.baseURL;

  login(userDetails: any): Observable<AuthResponse> {
    this.isLogged = true;

    //required headers
    let options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    let url = this.baseURL + 'user/v1/login';

    return this.http.post<AuthResponse>(url, userDetails, options);
  }
}
