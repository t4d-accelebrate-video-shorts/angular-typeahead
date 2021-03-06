import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Color } from './models/Color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorSearchTextInput = new FormControl();

  constructor(private httpClient: HttpClient) {
  }

  doColorSearch() {
    
  }
}
