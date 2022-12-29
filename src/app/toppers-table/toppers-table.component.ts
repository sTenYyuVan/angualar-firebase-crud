import { Component , ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { DataInteractionService } from '../shared/data-interaction.service';

export interface PeriodicElement {
  name: string;
  age: number;
  score: number;
  winner_flag:boolean;
  id:string;
}

@Component({
  selector: 'app-toppers-table',
  templateUrl: './toppers-table.component.html',
  styleUrls: ['./toppers-table.component.scss']
})
export class ToppersTableComponent {
  constructor(
    public dataService:DataInteractionService
  ){
    this.dataService.getUserData().then((data: PeriodicElement[]) => {
      this.userDataArray = data.filter(dataSource => dataSource.score > 90);
    })
    
  }
  userDataArray:PeriodicElement[] = []

  displayedColumns: string[] = ['name', 'age', 'score'];
  // value = [...ELEMENT_DATA].filter(dataSource => dataSource.score > 90);
  // dataSource = this.value;

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
}
