import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';

  constructor(private http: HttpClient) {}

  URL: string = '';
  Title: string = '';
  Author: string = '';
  Summary: string = '';

  SendURL() {
    const apiUrl = `https://your-backend-api.com/getDetails?url=${this.URL}`;

    // Send the GET request
    this.http.get<{ Title: string, Author: string, Summary: string }>(apiUrl)
      .subscribe(response => {
        // Handle the response and assign values
        this.Title = response.Title;
        this.Author = response.Author;
        this.Summary = response.Summary;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }
}
