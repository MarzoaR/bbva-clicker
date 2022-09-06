import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name  : string  = '';
  point : number  = 0;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(({ id }) => {
          this.name = id;
          console.log(this.name);
        });
  }

  increment() {
    this.point++;
  }

}
