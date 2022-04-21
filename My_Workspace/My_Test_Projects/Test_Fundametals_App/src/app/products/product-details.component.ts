import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  pageTitle : string = "Product Details Component";
  product : IProduct | undefined;
  

  //inject ActivatedRoute to use Dependency
  constructor(private route : ActivatedRoute, 
              private router : Router) { }

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
      this.pageTitle += ` : ${id} `;

      this.product = {
        'productId' : id,
        'productName' : 'Leaf Rake',
        'productCode': 'DGN-0023',
        'releaseDate': '15 gallon capacity',
        'price' : 32.99112,
        'description': 'this is sample description',
        'starRating' : 4.6,
        'imageUrl' : 'assets/images/delivery-truck.png'
      };
  }

  onBack() : void {
    this.router.navigate(["/products"]);
  }

}
