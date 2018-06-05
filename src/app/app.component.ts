import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  JSON = JSON;

  films = [];
  request;
  isLoading = false;

  constructor(
    private http: HttpClient,
  ) { }

  getFilms(query) {
    if (this.request) {
      this.request.unsubscribe();
      this.films = [];
      this.isLoading = false;
    }
    if (query) {
      this.isLoading = true;
      this.request = this.http
        .jsonp(`https://www.slated.com/films/autocomplete/profiles/?term=${query}`, 'callback')
        .subscribe(res => (this.films = res as any[], this.isLoading = false));
    }
  }
}
