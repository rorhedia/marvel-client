import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs";

import {ComicsResponse} from '../interfaces/comicResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) {
  }

  getComics() {
    return this.http.get<ComicsResponse>(`http://localhost:3000/api/v1/comics`)
      .pipe(map(res => res.data.results));
  }
}
