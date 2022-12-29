import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogboxComponent } from './dailogbox.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    DailogboxComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports :[DailogboxComponent]
})
export class DailogboxModule { }
