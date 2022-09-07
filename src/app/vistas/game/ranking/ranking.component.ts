import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { GameService } from '../services/game.service';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  listPlayers: Player[] = [];

  constructor( private gameService: GameService) { }

  ngOnInit(): void {
    this.listPlayers = this.gameService.getListPlayer();
    this.listPlayers.sort((a, b) => b.point - a.point);
  }

}
