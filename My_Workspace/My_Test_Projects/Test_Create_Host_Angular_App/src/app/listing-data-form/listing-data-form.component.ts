import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})

export class ListingDataFormComponent implements OnInit {
  name:string = '';
  description:string ='';
  price: number = 0;
  
  @Input() buttonText:string | undefined;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = 0;
  @Output() onSubmit: EventEmitter<Listing> = new EventEmitter<Listing>();

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onSubmitButtonClicked(): void {
    this.onSubmit.emit();
  }

  // onSubmit() : void {
  //   alert(`Creating a new listings page with name : ${this.name} , price : ${this.price} and description : ${this.description}!!`);
  //   this.router.navigateByUrl('/my-listing');
  // }
}
