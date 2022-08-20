import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/utilities/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let url = environment.baseURL + 'category/all';
    let options = {
      headers: {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    //get all the categories
    this.http.get<Category[]>(url, options).subscribe(
      (response: Category[]) => {
        console.log(response), (this.categories = response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
