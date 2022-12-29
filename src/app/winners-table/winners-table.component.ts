import { Component , ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { DataInteractionService  } from '../shared/data-interaction.service'; 
export interface PeriodicElement {
  name: string;
  age: number;
  score: number;
  winner_flag: boolean;
  id:string;
}

@Component({
  selector: 'app-winner_flags-table',
  templateUrl: './winners-table.component.html',
  styleUrls: ['./winners-table.component.scss']
})
export class WinnersTableComponent {

  constructor(
    public dataService:DataInteractionService
  ){
    this.dataService.getUserData().then((data: PeriodicElement[]) => {
      this.userDataArray = data.filter(data => data.winner_flag == true);
    })
    
  }
  userDataArray:PeriodicElement[]=[]
  displayedColumns: string[] = ['name', 'age', 'score'];
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

}
