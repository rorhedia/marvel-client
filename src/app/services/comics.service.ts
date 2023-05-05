import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, BehaviorSubject} from "rxjs";

import {environment} from '@env/environment'
import {Response} from '@interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  apiUrl: string = `${environment.apiUrl}/comics`;

  constructor(private http: HttpClient) {
  }

  getComics() {
    return this.http.get<Response>(this.apiUrl)
      .pipe(map(res => res.data.results));
  }

  getById(id: number) {
    return this.http.get<Response>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res.data.results));
  }

  searchComics(body: any) {
    if (body.title.length === 0) {
      return new BehaviorSubject<any>([]);
    }
    return this.http.post<Response>(`${this.apiUrl}/search`, body)
      .pipe(map(res => res.data.results));
  }
}
