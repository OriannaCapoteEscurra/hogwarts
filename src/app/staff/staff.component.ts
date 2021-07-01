import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.services';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

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
    private dataSv: DataService
  ) { }

  ngOnInit(): void {
    this._loadData();
  }

  _loadData(): void{
    this.loading = true;
    this.dataSv.getStaff().subscribe( res => {
      this.tbody = res;
      this.loading = false;
      length = this.tbody.length;
    });
  }

}
