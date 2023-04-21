import {Component, OnInit} from '@angular/core';
import {ComicsService} from "../../services/comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comics: ComicsService) {
  }

  ngOnInit() {
    this.comics.getComics().subscribe(res => {
      console.log(res);
    })
  }
}
