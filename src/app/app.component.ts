import { Component } from '@angular/core';

import { AutocompleteService } from './autocomplete.service';

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
    private autocomplete: AutocompleteService,
  ) { }

  getFilms(query) {
    if (this.request) {
      this.request.unsubscribe();
      this.films = [];
    }
    this.isLoading = true;
    this.request = this.autocomplete.getFilms(query)
      .subscribe(
        (res: any[]) => this.films = res,
        () => this.isLoading = false,
        () => this.isLoading = false,
      );
  }
}
