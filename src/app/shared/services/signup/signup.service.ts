import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  isLogged: boolean = false;
  baseURL = environment.baseURL;
  userData: any;
  
  signup(userDetails: any) {
    let options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    let url = this.baseURL + 'user/v1/register';

    return this.http.post(url, userDetails, options);
  }
}
