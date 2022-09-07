import { Injectable } from '@angular/core';

interface Player {
  name: string;
  point: number;
}

@Injectable({
  providedIn: 'root'
})

export class GameService {

  // playerList: any[] = [{name: 'jose', point: 1}, {name: 'juan', point: 2}, {name: 'pedro', point: 3}];

  

  constructor() { }

  updateListPlayer(playerInfo: Player) {
    // localStorage.getItem('players')
    // localStorage.setItem('player', JSON.stringify(playerList));
    // console.log('desde el servicio:' + playerList );
    // this.playerList.push(player);
    // console.log('desde el servicio:' + this.playerList );

    // console.log(playerInfo)

    let listPlayers = this.getListPlayer();
    // console.log("listPlayers", listPlayers);
    // console.log(typeof listPlayers);

    listPlayers.push(playerInfo)
    localStorage.setItem('players', JSON.stringify( listPlayers ));
  }

  getListPlayer() {
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    console.log(players);
    return [...players]
  }
}


