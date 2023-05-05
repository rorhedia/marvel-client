import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {debounceTime, switchMap, tap} from "rxjs";

import {ComicsService} from "@services/comics.service";
import {Comic} from "@interfaces/comics.interface";

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
  spinner: boolean = true;


  constructor(
    private comicsService: ComicsService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.comicsService.getComics().subscribe(comics => {
      this.comics = comics
      this.spinner = false;
    });

    this.comicForm.valueChanges.pipe(
      debounceTime(300),
      tap(title => ({title, offset: this.offset})),
      switchMap(val => {
        this.comics = [];
        this.spinner = true;
        return this.comicsService.searchComics(val);
      })
    ).subscribe(comics => {
      this.comics = comics;
      this.spinner = false;
    });

  }

}
