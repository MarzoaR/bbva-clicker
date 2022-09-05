import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { GameComponent } from './game/game/game.component';
import { FormComponent } from './home/form/form.component';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    GameComponent
  ]
})
export class VistasModule { }
