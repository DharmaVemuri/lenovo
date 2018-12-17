import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';



@Injectable()

export class StatusService {



    constructor(private http: Http) {

        

    }

    dailyForecast() {
        return this.http.get("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=b6907d289e10d714a6e88b30761fae22")
            .map(result => result);
    }




}