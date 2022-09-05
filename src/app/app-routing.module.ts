import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './vistas/game/game.component';
import { HomeComponent } from './vistas/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }