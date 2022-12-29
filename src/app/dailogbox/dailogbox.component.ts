import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataInteractionService } from '../shared/data-interaction.service';


@Component({
  selector: 'app-dailogbox',
  templateUrl: './dailogbox.component.html',
  styleUrls: ['./dailogbox.component.scss']
})
export class DailogboxComponent {

  constructor(
    public dialogRef: MatDialogRef<DailogboxComponent>,
    public userDataService:DataInteractionService
  ){}

  updateWinner = ()=>{
    this.userDataService.updateWinner()
  }
  closeDailog = ()=>{
    this.dialogRef.close()
  }
}
