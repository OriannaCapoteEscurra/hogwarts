import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.services';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

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
    this.dataSv.getStudents().subscribe( res => {
      this.tbody = res;
      this.loading = false;
      length = this.tbody.length;
    });
  }

}
