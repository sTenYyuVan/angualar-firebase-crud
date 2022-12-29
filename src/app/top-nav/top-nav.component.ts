import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  constructor (
    private router:Router
  ) {}

  handle_user_click =(table:string)=>{
    this.router.navigateByUrl(`/${table}`)
   
  }
}
