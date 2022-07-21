import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
list:any
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/products").subscribe((data) => {
      this.list = data
    }, error => {
      console.log(error)
    });
  }

}
