import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggleFlag = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  consultDataHouse(house: string): void {
    console.log('callback houses',  house);
    this.router.navigateByUrl('/personages', { state: { name: house } });
  }

}
