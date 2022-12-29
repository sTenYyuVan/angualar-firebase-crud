import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavModule } from './top-nav/top-nav.module';
import { UserTableModule } from './user-table/user-table.module';
import { WinnersTableModule } from './winners-table/winners-table.module';
import { ToppersTableModule } from './toppers-table/toppers-table.module';
import { DialogModule } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DailogboxModule } from './dailogbox/dailogbox.module';
import { AddUserModule } from './add-user/add-user.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopNavModule,
    UserTableModule,
    WinnersTableModule,
    ToppersTableModule,
    DialogModule,
    MatButtonModule,
    DailogboxModule,
    AddUserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
