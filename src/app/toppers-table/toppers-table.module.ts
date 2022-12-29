import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppersTableComponent } from './toppers-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    ToppersTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports :[ToppersTableComponent]
})
export class ToppersTableModule { }
