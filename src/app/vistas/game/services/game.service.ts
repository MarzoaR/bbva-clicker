import { Injectable } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor() { }

  updateListPlayer(playerInfo: Player) {
    let listPlayers = this.getListPlayer();
    const index = listPlayers.findIndex(player => player.name === playerInfo.name)

    if( index >= 0 ){
      listPlayers[index].point = playerInfo.point;
    }else{
      listPlayers.push(playerInfo)
    }

    localStorage.setItem('players', JSON.stringify( listPlayers ));
  }

  getListPlayer() {
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    return [...players]
  }

  getPointsPlayer(name: string) {
    let listPlayers = this.getListPlayer();
    const index = listPlayers.findIndex(player => player.name === name)
    if( index < 0 ){
      return 0;
    }else{
      return listPlayers[index].point;
    }
  }
}


