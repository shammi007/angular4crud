import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import 'rxjs/add/operator/topromise' ;


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object=[];
  products=[];
  productObj:object=[];
  private headers=new Headers({'Content-Type':'application/json'});

  constructor( private http:HttpClient, private router:Router, private route:ActivatedRoute) { }
  url="http://localhost:5555/products";
  
  updateProduct(product){
    this.productObj={
      "name":product.name,
      "color":product.color
    };
    const url = `${this.url}/${this.id}`
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     this.http.put(url, JSON.stringify(this.productObj), httpOptions)
     .toPromise()
     .then(() => {
       this.router.navigate(['/']); 
     }
   
     )
    
    
  }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id=+params['id'];
    }
      );
      this.http.get("http://localhost:5555/products").subscribe(
        (res:Response|any) => {this.products=res;
        for(var i=0;i<this.products.length;i++){
          if(parseInt(this.products[i].id)=== this.id){
            this.data=this.products[i];
            break;
          }
        }
      }
      )
  }

}
