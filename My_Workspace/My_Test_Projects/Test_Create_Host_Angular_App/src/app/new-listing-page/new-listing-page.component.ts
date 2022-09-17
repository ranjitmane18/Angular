import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})

export class NewListingPageComponent implements OnInit {

  name:string = '';
  description:string ='';
  price: number = 0;

  constructor(private router : Router, private listingService: ListingsService) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onSubmit({name, description, price} : {name: string, description: string, price: number}): void {
    console.log("onSubmit : create listing is called");
    this.listingService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listing');
      });
  }
}
