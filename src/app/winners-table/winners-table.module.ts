import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersTableComponent } from './winners-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [WinnersTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports:[
    WinnersTableComponent
  ]
})
export class WinnersTableModule { }
