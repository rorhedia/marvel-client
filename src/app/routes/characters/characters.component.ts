import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {CharactersService} from "@services/characters.service";
import {Personaje} from "@interfaces/characters.interface";
import {debounceTime, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  personajes: Array<Personaje> = [];
  offset = 0;
  Form = this.fb.group({
    name: ['']
  });
  spinner: boolean = true;

  constructor(private characterSvc: CharactersService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.characterSvc.getPersonajes().subscribe(comics => {
      this.personajes = comics
      this.spinner = false;
    });

    this.Form.valueChanges.pipe(
      debounceTime(300),
      tap(name => ({name, offset: this.offset})),
      switchMap(val => {
        this.personajes = [];
        this.spinner = true;
        return this.characterSvc.searchPersonajes(val);
      })
    ).subscribe(comics => {
      this.personajes = comics;
      this.spinner = false;
    });

  }
}
