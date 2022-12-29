import { Component ,ViewChild, } from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DataInteractionService } from '../shared/data-interaction.service';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';


export interface PeriodicElement {
  name: string;
  age: number;
  score: number;
  winner_flag: boolean;
  id:string;
}
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent  {
  userDataArray: PeriodicElement[] = [];
 
   constructor(
    public dialog: MatDialog,
    public userData:DataInteractionService
  ) {
    this.userData.getUserData().then((data: PeriodicElement[]) => {
      this.userDataArray = data.filter(data => data.age <= 21);
    })
  }
  displayedColumns: string[] = ['name', 'age', 'score','button','deletebtn'];
  
  addWinner = (enterAnimationDuration: string, exitAnimationDuration: string, element:PeriodicElement)=>{
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  
    this.userData.setcurrentWinner(element)
  }

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  selected_winner:any;
  removeWinner =  (enterAnimationDuration: string, exitAnimationDuration: string, element:PeriodicElement)=>{
    this.dialog.open(DailogboxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  
    this.userData.setcurrentWinner(element)
  }
  handleDelete = (element:PeriodicElement)=>{
    
    this.userData.deleteApiCall(element)
  }
  
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html'
})
export class DialogAnimationsExampleDialog {
 
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    public userData:DataInteractionService
    ) {}
  updateWinner = ()=>{

    this.userData.updateWinner()
    this.dialogRef.close();   
  }
  closeDailog = ()=>{
    this.dialogRef.close(); 
  }

  

}