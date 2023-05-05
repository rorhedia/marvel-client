import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ComicsService} from "@services/comics.service";
import {CharactersService} from "@services/characters.service";

enum pages {
  comic = 'comic',
  personaje = 'personaje'
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any = {};
  buyMessage: string = '';
  showPrice: boolean = true;
  spinner: boolean = true;
  item = {
    title: '',
    description: '',
    image: ''
  }

  constructor(
    private route: ActivatedRoute,
    private comicSvc: ComicsService,
    private characterSvc: CharactersService
  ) {
  }

  ngOnInit() {
    const urlInfo = this.route.snapshot.url.map(res => res);
    const section: string = urlInfo[0].path;
    const item: number = parseInt(urlInfo[1].path);

    if (section === pages.comic) this.getComic(item);
    else if (section === pages.personaje) this.getCharacter(item);

  }

  getComic(id: number) {
    this.comicSvc.getById(id).subscribe(data => {
      // @ts-ignore
      this.data = data[0];
      this.buyMessage = `$ ${this.data.prices[0].price}`;
      this.item = {
        title: this.data.title || '',
        description: this.data.description || null,
        image: `${this.data.images[0].path}.${this.data.images[0].extension}` || '',
      }
      this.spinner = false;
    })
  }

  getCharacter(id: number) {
    this.showPrice = false;
    this.characterSvc.getById(id).subscribe(data => {
      // @ts-ignore
      this.data = data[0];
      this.item = {
        title: this.data.name || '',
        description: this.data.description || null,
        image: `${this.data.thumbnail.path}.${this.data.thumbnail.extension}` || '',
      }
      this.spinner = false;
    })
  }

  handlerMessage() {
    this.buyMessage = 'A te creas, esto no está implementado \n🤪🫣'
  }
}
