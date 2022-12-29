import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import { TopNavComponent } from './top-nav.component';


@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports :[
    TopNavComponent
  ]
})
export class TopNavModule { }
