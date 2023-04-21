import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs";
import {data} from "autoprefixer";

interface comicResponse {
  attributionHTML: string;
  attributionText: string;
  copyright: string;
  data: any;

}

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) {
  }

  getComics() {
    return this.http.get<comicResponse>(`http://localhost:3000/api/v1/comics`)
      .pipe(map(res => res.data.results));
  }
}
