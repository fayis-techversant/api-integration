import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Content } from './types/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title:string = 'api-integration'

  contents: Content[] = [];

  constructor( private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<Content[]>('https://jsonplaceholder.typicode.com/posts').subscribe( res =>{
      this.contents = res
      console.log(this.contents);
    })
  }
}
