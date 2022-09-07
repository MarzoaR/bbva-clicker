import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getName();
    this.getPoints();
  }


  getName() {
    this.activatedRoute.params
        .subscribe(({ id }) => {
          this.name = id;
        });
  }

  getPoints() {
    this.point = this.gameService.getPointsPlayer(this.name);
  }

  increment() {
    this.point++;
  }

  save() {
    let player = {
      name: this.name,
      point: this.point
    }
    this.gameService.updateListPlayer(player);
    this.router.navigate(['/home']);
  }

}
