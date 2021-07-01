import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonageComponent } from './personage/personage.component';
import { DataService } from 'src/services/data.services';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { AddComponent } from './students/child/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonageComponent,
    DataTableComponent,
    HeaderComponent,
    StudentsComponent,
    StaffComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    PersonageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
