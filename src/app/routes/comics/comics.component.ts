import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {ComicsService} from "../../services/comics.service";
import {Comic} from "../../interfaces/comics.interface";
import {debounceTime, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Array<Comic> = [];
  offset = 0;
  comicForm = this.fb.group({
    title: ['']
  })

  constructor(private comicsService: ComicsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.comicsService.getComics().subscribe(comics => {
      this.comics = comics
    });

    this.comicForm.valueChanges.pipe(
      debounceTime(300),
      tap((title) => {
        // @ts-ignore
        if (title && title.length === 0) title = '';
        return {title, offset: this.offset}
      }),
      switchMap(val => this.comicsService.searchComics(val))
    ).subscribe(comics => {
      console.log(comics);
      this.comics = comics;
    });

  }
}
