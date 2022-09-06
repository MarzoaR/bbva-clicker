import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.scss']
})
export class InfoGameComponent implements OnInit {

  @Input() name  : string  = '';
  @Input() point : number  = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
