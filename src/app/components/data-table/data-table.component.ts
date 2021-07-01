import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() thead: any;
  @Input() tbody: any;
  @Input() loading: boolean;
  @Input() length = 0;
  constructor() { }

  ngOnInit(): void {
    this.orderBy('age');
  }

  _calculateAge(year: number): any {
    const yearOfBirth = new Date(year, 1, 1).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;
    return age;
  }

  method(a: any, b: any, prop: any): any{
    console.log('a.prop ', a.prop);
    if (a.prop > b.prop){
        return 1;
    } else if (a.prop < b.prop){
        return -1;
    }
    return 0;
 }

  orderBy(prop): any{
    return this.method(this.tbody, this.tbody, prop);
 }

}
