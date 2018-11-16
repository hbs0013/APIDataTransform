import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operator/filter';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FetchUserDataService {

  constructor(private _http:HttpClient) { }

  getUserData():any{
    return this._http.get("https://jsonplaceholder.typicode.com/users")
    }
}
