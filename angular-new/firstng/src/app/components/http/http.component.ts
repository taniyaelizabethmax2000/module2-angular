import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit,OnChanges {
private url:string="https://jsonplaceholder.typicode.com/todos";
private data:any;
//every http request in angular is asynchronous-it makes XHR - Ajax call
//cause - it cause page navigation,page url doesnt change but content changes
//basically every http request on web is synchronous whereas,in Angular every http request is asynchronous
constructor(private http:HttpClient){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }



ngOnInit():void{
  console.log('ngOnInit.....');


//http methods -get,post,put,delete
this.http.get(this.url).subscribe((resData)=>{
  this.data = resData;
  console.log(this.data);
});
}
}