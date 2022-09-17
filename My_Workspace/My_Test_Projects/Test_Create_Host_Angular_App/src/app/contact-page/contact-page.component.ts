import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  email: string = '';
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    {
      console.log("Getting listing by id for the product id :", id);
      this.listingService.getListingById(id).subscribe(listing => {
        console.log("contact-page on init result received from the service",listing);
        this.listing = listing;
        if(this.listing != null)
        {
          this.message = `Hi ! I am interested in your ${this.listing.name.toLocaleLowerCase()}.`;
        }
        else
        {
          console.log("listing details not found for", id);
        }
      });
    }   
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
