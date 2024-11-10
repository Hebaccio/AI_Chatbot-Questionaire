import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.html',
  styleUrls: ['./assistant.css']
})
export class Assistant {

  constructor(private http: HttpClient) {}

  prompt: string = '';
  response: string = '';
  formattedResponse: string = ""

  SendPrompt() {
    const apiUrl = `http://127.0.0.1:5000/chat?prompt=${encodeURIComponent(this.prompt)}`;

    this.http.get<{ response: string }>(apiUrl)
      .subscribe(response => {
        // Handle the response and assign values
        this.response = response.response;

        this.formattedResponse = this.response
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }, error => {
        console.error('Error fetching data:', error);
      });
  }

}
