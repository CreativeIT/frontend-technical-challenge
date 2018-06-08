import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AutocompleteService {

  constructor(
    private http: HttpClient,
  ) { }

  getFilms(query) {
    return this.http
      .jsonp(`https://www.slated.com/films/autocomplete/profiles/?term=${query}`, 'callback');
  }
}
