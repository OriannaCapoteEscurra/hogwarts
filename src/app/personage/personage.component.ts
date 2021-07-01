import { Location } from '@angular/common';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.services';

@Component({
  selector: 'app-personage',
  templateUrl: './personage.component.html',
  styleUrls: ['./personage.component.scss']
})
export class PersonageComponent implements OnInit {

  houseName: any;
  loading = false;
  length = 0;
  logo: string;
  thead = [
    {
      colunm: 'imagen'
    },
    {
      colunm: 'nombre'
    },
    {
      colunm: 'patronus'
    },
    {
      colunm: 'edad'
    }
  ];
  tbody: any = [];
  constructor(
    private location: Location,
    private dataSv: DataService
  ) { }

  ngOnInit(): void {
    this.houseName = this.location.getState();
    this.logo = '../../assets/images/houses/' + this.houseName.name + '-logo.png';
    this._loadData();
  }

  _loadData(): void{
    this.loading = true;
    this.dataSv.getPersonage(this.houseName.name).subscribe( res => {
      this.tbody = res;
      this.loading = false;
      length = this.tbody.length;
    });
  }

}
