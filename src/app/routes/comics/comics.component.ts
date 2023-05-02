import {Component, OnInit} from '@angular/core';

import {ComicsService} from "../../services/comics.service";
import {Comic} from "../../interfaces/comics.interface";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Array<Comic> = []

  constructor(private comicsService: ComicsService) {
  }

  ngOnInit() {
    this.comicsService.getComics().subscribe(res => {
      this.comics = res;
    })
  }
}
