import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 confirmation:string="New Product has been added";
 isAdded:boolean=false;
  constructor(private http:HttpClient) { }
  prodObj:object=[];
  addNewProduct=function(product){
this.prodObj={
  "name":product.name,
  "color":product.color
}
this.http.post("http://localhost:5555/products", this.prodObj).subscribe(
  (res:Response) => {this.isAdded=true;}
)
}
  ngOnInit() {
   
  }

}
