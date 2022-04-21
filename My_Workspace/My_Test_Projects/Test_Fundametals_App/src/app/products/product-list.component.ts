import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls : ['./product-list.component.css']
})

//product list component
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(private productService : ProductService) {
  }

  pageTitle: string ="Product-List 123";
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = true;
  errorMessage: string = '';

  //TS definite assignment assertion
  //to declare a variable without assigning default value
  //it bypass the angular strict type checking
  //tells angular that we will handler assignment of the property sometimes later
  sub!: Subscription;

  //listFilter : string = "cart";
  private _listFilter : string = '';

  //getter
  get listFilter () : string {
    return this._listFilter;
  }

  //setter
  set listFilter (value : string) {
    this._listFilter = value;
    console.log("In setter :", value);
    this.filteredProducts = this.performFilter(value);
  }

  //filtered produtcs
  filteredProducts : IProduct[] = [];

  //products
  products : IProduct[] = [];

  toggleImage() : void {
    this.showImage = !this.showImage;
  }


  //set list of products property once we receive the data from the service
  ngOnInit(): void {
    console.log('Product list component is initialized !!!');
    this.sub = this.productService.getProducts().subscribe({
      next : (products)=> {
        this.products = products;
        this.filteredProducts = this.products;
        console.log("ngOnInit => next is called");
      },
       error :err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("ngOnInit is called");
  }

  performFilter(filterBy : string) : IProduct[] {
    console.log('performFilter is called with', filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message : string) : void {
    //modify page title when on rating event callback is received
    this.pageTitle = 'Product List: ' + message;
  }
}
