import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  newLesson: any;
  error: any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    
  }


}

