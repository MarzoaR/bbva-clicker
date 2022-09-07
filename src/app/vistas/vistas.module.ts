import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { GameComponent } from './game/game/game.component';
import { FormComponent } from './home/form/form.component';
import { FormsModule } from '@angular/forms';
import { InfoGameComponent } from './game/info-game/info-game.component';
import { RankingComponent } from './game/ranking/ranking.component';
// import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    FormComponent,
    InfoGameComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    GameComponent,
  ]
})
export class VistasModule { }
