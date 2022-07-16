import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})

export class EditListingPageComponent implements OnInit {
  listing : Listing  = {
    id: '',
    name: '',
    description: '',
    price: 10,
    views: 0
  } ;

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let listingResult = fakeMyListings.find(listing => listing.id === id);
    if(listingResult != undefined)
    {
      this.listing = listingResult;
    }
  }

  onSubmit(): void {
    alert('saving changes to the listing');
    this.router.navigateByUrl('/my-listing');
  }
}
