import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
   constructor(private _http: HttpClient) {
    
      
  }
  addUser(newUser){
    console.log("in add service")
    return this._http.post('/user', newUser)
  }
  signin(currentUser){
    console.log("in add service")
    console.log(currentUser)
    return this._http.post('/login', currentUser)
  }
  addLesson(newLesson){
    console.log("in add lesson service")
    console.log(newLesson)
    return this._http.post('/newLesson', newLesson)
  }
  addEvent(newEvent){
    console.log("in add event service")
    console.log(newEvent)
    return this._http.post('/newLesson', newEvent)
  }


 
}

 
