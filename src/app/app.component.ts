import { Component } from '@angular/core';
//import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { User } from './tools/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //users: Observable<User>;

  //constructor( private http: Http ){
    //this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( rpta => this.users = rpta.json() );
  //}
}
