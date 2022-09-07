import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name  : string  = '';
  point : number  = 0;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) { }

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

  test() {
    let test = {
      name: this.name,
      point: this.point
    }
    console.log(test);
    this.gameService.updateListPlayer(test);

  }

  get() {
    this.gameService.getListPlayer();
  }

}
