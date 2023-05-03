import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs";

import {environment} from '../../environments/environment'
import {ComicsResponse} from '../interfaces/comicResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  apiUrl: string = `${environment.apiUrl}/comics`;

  constructor(private http: HttpClient) {
  }

  getComics() {
    return this.http.get<ComicsResponse>(this.apiUrl)
      .pipe(map(res => res.data.results));
  }

  searchComics(body: any) {
    return this.http.post<ComicsResponse>(`${this.apiUrl}/search`, body)
      .pipe(map(res => res.data.results));
  }
}
