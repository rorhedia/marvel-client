import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Comic} from '@interfaces/comics.interface'
import {ComicsService} from "@services/comics.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: Comic | any = {};
  buyMessage: string = '';


  constructor(
    private route: ActivatedRoute,
    private comicSvc: ComicsService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.comicSvc.getById(parseInt(id)).subscribe(data => {
      // @ts-ignore
      this.data = data[0];
      this.buyMessage = `$ ${this.data.prices[0].price}`;
    })
  }

  handlerMessage() {
    this.buyMessage = 'A te creas, esto no está implementado \n🤪🫣'
  }
}
