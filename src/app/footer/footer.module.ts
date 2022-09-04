import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppStoreComponent } from './app-store/app-store.component';



@NgModule({
  declarations: [
    FooterComponent,
    AppStoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
