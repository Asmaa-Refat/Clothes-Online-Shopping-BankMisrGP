import { ProfileData } from './../../shared/utilities/profileDate';
import { SignupService } from './../../shared/services/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/utilities/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _signupService: SignupService,
    private http: HttpClient
  ) {}

  userData: ProfileData = new ProfileData();

  ngOnInit(): void {
    let url = `${environment.baseURL}user/v1/showProfile`;

    let options = {
      headers: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    //get request to get the data that is going to be displayed in the profile page
    this.http.get<ProfileData>(url, options).subscribe(
      (response: ProfileData) => {
        console.log(response), (this.userData = response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
