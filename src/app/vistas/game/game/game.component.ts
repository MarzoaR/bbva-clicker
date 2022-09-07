import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name                : string  = '';
  point               : number  = 0;
  autoclick           : number = 0;
  autoClickerBaseCost : number = 100;
  autoClickerCost     : number = 0;

  @ViewChild('btnBot') btnBot!: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getName();
    this.getPoints();
    this.getAutoClickerCost();
    
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

  getAutoClickerCost() {
    this.autoClickerCost = this.autoClickerBaseCost + this.autoClickerBaseCost * this.autoclick;
  }

  increment() {
    this.point++;
    console.log(this.autoClickerCost)
    if(this.point%this.autoClickerCost == 0){
      this.activateAutoclick();
    }
  }

  activateAutoclick() {
    this.btnBot.nativeElement.disabled = false;
  }

  startAutoClick() {
    this.autoclick++;
    window.setInterval(() => {
      this.point++;
      this.getAutoClickerCost()
      if(this.point%this.autoClickerBaseCost == 0){
        this.activateAutoclick();
      }
    }, 100);

    this.deactivateAutoclick();
  }

  deactivateAutoclick() {
    this.btnBot.nativeElement.disabled = true;
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
