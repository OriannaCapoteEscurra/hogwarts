import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(
        private http: HttpClient
    ){}

    getPersonage(house: string): Observable<any>{
        return this.http.get<any>('http://hp-api.herokuapp.com/api/characters/house/' + house);
    }

    getStudents(): Observable<any>{
        return this.http.get<any>('http://hp-api.herokuapp.com/api/characters/students');
    }

    getStaff(): Observable<any>{
        return this.http.get<any>('http://hp-api.herokuapp.com/api/characters/staff');
    }
}
