import { Injectable } from '@angular/core';

@Injectable()
export class ParseDataService {
  sortFlag:boolean;
  constructor() { 
    this.sortFlag=true;
  }
  sortNames(usersData){
    if(this.sortFlag===true){
      usersData.sort((name1,name2)=>{
        if(name1.name.split(' ')[1] < name2.name.split(' ')[1]){
          return -1;
        }else if(name1.name.split(' ')[1] > name2.name.split(' ')[1]){
          return 1;
        }else{
          return 0;
        }
    });
    this.sortFlag=false;
    return usersData;
  }else{
    usersData.sort((name1,name2)=>{
      if(name1.name.split(' ')[1] > name2.name.split(' ')[1]){
        return -1;
      }else if(name1.name.split(' ')[1] < name2.name.split(' ')[1]){
        return 1;
      }else{
        return 0;
      }
    });
    this.sortFlag=true;
    return usersData;
    }    
  }
}
