import { Component,OnInit } from '@angular/core';
import { FetchUserDataService } from './services/fetch-user-data.service';
import { ParseDataService } from './services/parse-data.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users:any;
  
  constructor(private _userData:FetchUserDataService, private _sortData:ParseDataService){   
  }
  
  ngOnInit(){
  this._userData.getUserData()
      .subscribe((data)=>{
        let xyz=data.filter(function(curr){
          return curr.phone.includes('x')==false;
        });        
        this.users=xyz;
      });
  }
  sortFullname(){
    this.users=this._sortData.sortNames(this.users);
  }
}
