import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonageComponent } from 'src/app/personage/personage.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }
}
