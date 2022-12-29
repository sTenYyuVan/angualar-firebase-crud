import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table.component';
import { DialogAnimationsExampleDialog } from './user-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserTableComponent,
    DialogAnimationsExampleDialog
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[UserTableComponent]
})
export class UserTableModule { }
