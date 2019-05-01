import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/topromise' ;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url="http://localhost:5555/products";
  constructor(private http:HttpClient) { }
  id:number;
private headers=new Headers({'Content-Type':'application/json'});
products=[];
  fetchData =function(){
      this.http.get(this.url).subscribe(
        (res:Response) => {this.products=res; }
      )
  }
  deleteProduct=function(id){
    if(confirm('Are you sure?')){
      const url = `${this.url}/${id}`;
      
      return this.http.delete(url,{headers:this.headers}).toPromise()
      .then(() => {
        this.fetchData();
      }
      )
      
    }
  }
  
  ngOnInit() {
    this.fetchData();
  }
 
}
