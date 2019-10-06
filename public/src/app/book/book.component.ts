import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newLesson: any;
  error: any;
  newEvent: any;
  booking: any;
  lesson: any;
  buttonTriggered = false;

  constructor(private _httpService: HttpService,     private _route: ActivatedRoute,
    private _router: Router){}

  ngOnInit() {
    this.newLesson = {street:"",city: "",day: "", request: "",time: "", hours: "",type:"" }
    this.newEvent = {street:"",city: "",day: "", request: "",time: "", hours: "",type:"" }
  }
  addLesson() {
    this.buttonTriggered = true;
    console.log(this.newLesson)
    let tempObservable = this._httpService.addLesson(this.newLesson);
    tempObservable.subscribe (data => {
      console.log('we added this Lesson:', data)

      if (data["message"] === "error"){
        console.log ("error");
        this.error = data['error'];
        console.log(this.error);
        this._router.navigate(['/new']);
      }
      else {
      this.lesson= data['data'];
      console.log("adding new Lesson")
      this._router.navigate(['/book', this.lesson]);
      }
    
    })
  }
  addEvent() {
    this.buttonTriggered = true;
    console.log(this.newEvent)
    let tempObservable = this._httpService.addEvent(this.newEvent);
    tempObservable.subscribe (data => {
      console.log('we added this Event:', data)

      if (data['errors']){
        console.log(data);
        console.log ("error");
        this.error = data['error'];
        console.log(this.error);
        this._router.navigate(['/book', this.error]);
      }
      else {
      this.booking = data['data'];
      console.log("adding new Event")
      console.log(this.booking)
      this._router.navigate(['/book', this.booking]);
      }
    
    })
  }
  
}
